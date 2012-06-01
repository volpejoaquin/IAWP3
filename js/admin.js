//Snippet para remover un warning molesto de Webkit.... 
(function(){
    // remove layerX and layerY
    var all = $.event.props,
        len = all.length,
        res = [];
    while (len--) {
      var el = all[len];
      if (el != 'layerX' && el != 'layerY') res.push(el);
    }
    $.event.props = res;
}());


$(document).ready(function() {
	$("#acciones").hide();
	$("#accCat").hide();
	$("#agregarP").hide();
	$("#modificarP").hide();
	$("#agregarC").hide();
	$("#modificarC").hide();
	$("#agregarI").hide();
	$('#nuevaImg').hide();
	
	$("#dialogModificarProd").hide();
	$("#dialogModificarCat").hide();
	$("#dialogElim").hide();
	$("#dialogElimCat").hide();
	$("#dialogAgregarImg").hide();
	$("#dialogElimImg").hide();

	$("#menuProductos").click(menuProductos);
	$("#menuCateg").click(menuCateg);
	$("#menuAgregar").click(menuAgregarProd);
	$("#menuModificar").click(menuModificarProd);
	$("#menuAgregarCategorias").click(menuAgregarCat);
	$("#menuModificarCategorias").click(menuModificarCat);
	$("#menuImagenes").click(menuImagenes);
	$("#menuConfigurar").click(menuConfigurar);
	$("#menuConfigurarConfiguracion").click(menuConfigurarConf);
	$("#menuBackup").click(menuBackup);
	
	$("#botonGuardarConf").click(guardarConfiguracion);
	
	//Carga configuracion
	$.getJSON('_lib/configuracion.php', function(data) {
		if (data.destacado == "false") {
			$("#ver_destacado").attr("checked",false);
		}
		else {
			$("#ver_destacado").attr("checked",true);
		}
		$("#limite option[value="+data.limit+"]").attr("selected",true);			
	});
	
	
	//Validar el formulario de agregar producto
	$('#agregarForm').validate({
		debug: true,
		errorClass:'invalid',
		validClass:'success',
		errorLabelContainer: "#erroresAgregar",
   		wrapper: "li",
		rules:
		{
		"nombre":{
		required:true,
		maxlength:60,
		minlength:1
		},
		"descripcion":{
		required:true,
		maxlength:100,
		minlength:1,
		},
		"marca":{
		required:true,
		maxlength:40,
		minlength:1
		},
		"stock":{
		required:true,
		number:true,
		minlength:1,
		maxlength:10
		},
		"precio":{
		required:true,
		number:true,
		minlength:1,
		maxlength:20
		}
		},
		
		messages:
		{
		"nombre":{
		required:"Se requiere un nombre para el producto.",
		minlength: jQuery.format("Como mínimo {0} caracter para el nombre!")
		},
		"descripcion":{
		required:"Se requiere una descripción para el producto.",
		minlength: jQuery.format("Como mínimo {0} caracter para la descripcion!")
		},
		"precio":{
		required:"Se requiere un precio para el producto.",
		number:"Se especificó un número inválido para el precio."	
		},
		"stock":{
		required:"Se requiere la cantidad de productos en stock.",
		number:"Se especificó un número inválido para el stock."
		},
		"marca":{
		required:"Se requiere una marca para el producto."
		}},
		
		submitHandler: function(form){
			
			$.post('_lib/agregarProd.php', $("#agregarForm").serialize(), function(data) {
					$('#agregarP').toggle('fast');
					$('#agregarForm').get(0).reset();
					$('#resultAP').html(data);
				});
			
		}
		});
		
		//Validar el formulario de agregar categoria
	$('#agregarCatForm').validate({
		debug: true,
		errorClass:'invalid',
		validClass:'success',
		errorLabelContainer: "#erroresAgregarCat",
   		wrapper: "li",
		rules:
		{
		"nombre":{
		required:true,
		maxlength:60,
		minlength:1
		},
		"descripcion":{
		required:true,
		maxlength:100,
		minlength:1,
		}},
		messages:
		{
		"nombre":{
		required:"Se requiere un nombre para la categoría.",
		minlength: jQuery.format("Como mínimo {0} caracter para el nombre!")
		},
		"descripcion":{
		required:"Se requiere una descripción para la categoría.",
		minlength: jQuery.format("Como mínimo {0} caracter para la descripcion!")
		}},
		
		submitHandler: function(form){
			
			$.post('_lib/agregarCat.php', $("#agregarCatForm").serialize(), function(data) {
					$('#agregarC').toggle('fast');
					$('#agregarCatForm').get(0).reset();
					$('#resultAC').html(data);
				});
			
		}
		});
		
		
		//Usuario y password
		$("#usuario").focus(function() {
			if ($("#usuario").val() == "Usuario") {
				$("#usuario").val("");
			}
		});
		$("#usuario").blur(function() {
			if ($("#usuario").val() == "") {
				$("#usuario").val("Usuario");
			}
		});
		
		$("#password").focus(function() {
			if ($("#password").val() == "Password") {
				$("#password").get(0).type = 'password';
				$("#password").val("");
			}			
		});
		$("#password").blur(function() {
			if ($("#password").val() == "") {
				$("#password").get(0).type = 'text';
				$("#password").val("Password");
			}
		});
		
		//Boton de login
		$("#botonLogin").click(function() {
			var url = '_lib/login.php?user='+$("#usuario").val()+'&password='+$("#password").val()+'';
			
			$.getJSON(url, function(data) {
				var resp = data.respuesta;
				if (resp == false) {
					$("#error").html(data.msj);
					$("#error").show();
				} else {
					window.location.href = "index.php?mc=Admin";
				}
			});	
		});
		
		 
});//fin document.ready


function menuProductos(){
	$("#acciones").toggle('fast');
	
	$("#agregarP").hide();
	$("#modificarP").hide();
	$("#agregarC").hide();
	$("#modificarC").hide();
	$("#accCat").hide();
	$("#accCon").hide();
	limpiarResultados();
	
}

function menuCateg(){
	
	$("#accCat").toggle('fast');
	
	$("#agregarC").hide();
	$("#modificarC").hide();
	$("#agregarP").hide();
	$("#modificarP").hide();
	$("#acciones").hide();
	$("#accCon").hide();
	limpiarResultados();
}

//Muestra los componentes para agregar un prod
function menuAgregarProd(){
	$("#agregarP").toggle("fast");
	$("#agregarI").hide();
	$('#nuevaImg').hide();
	$("#modificarP").hide();
	cargarCategorias();
	limpiarResultados();
}

function menuModificarProd(){
	$("#modificarP").toggle("fast");
	$("#agregarP").hide();
	$("#agregarI").hide();
	$('#nuevaImg').hide();
	cargarCategorias();
	limpiarResultados();
	
	var isHidden = $('#modificarP').is(':hidden');
	
	if(isHidden!="true")
		//Hace la consulta a la bd y carga los productos a la tabla
		mostrarTablaProductos();
	
}

function menuImagenes(){
	$("#agregarI").toggle("fast");
	$('#nuevaImg').hide();
	$("#agregarP").hide();
	$("#modificarP").hide();
	limpiarResultados();
	
	var isHidden = $('#agregarI').is(':hidden');
	
	if(isHidden!="true")
		//Hace la consulta a la bd y carga los productos a la tabla
		mostrarTablaImagenes();
	
}

function menuAgregarCat(){
	$("#agregarC").toggle("fast");
	$("#modificarC").hide();
	cargarCategorias();
	limpiarResultados();
}

function menuModificarCat(){
	$("#modificarC").toggle("fast");
	$("#agregarC").hide();
	cargarCategorias();
	limpiarResultados();
	
	var isHidden = $('#modificarC').is(':hidden');
	
	if(isHidden!="true")
		//Hace la consulta a la bd y carga los productos a la tabla
		mostrarTablaCategorias();
}




//Borra el contenido de los divs que muestran los resultados de insertar
function limpiarResultados(){
	
	$("#resultAP").html("");
	$("#resultAC").html("");
}


function menuConfigurar(){
	$("#accCon").toggle('fast');
	
	$("#accCat").hide();
	$("#agregarC").hide();
	$("#modificarC").hide();
	$("#agregarP").hide();
	$("#modificarP").hide();
	$("#acciones").hide();
}

function menuConfigurarConf(){
	$("#modificarConf").toggle('fast');
}

function guardarConfiguracion() {
	$.getJSON('_lib/configuracion.php?ver_destacado='+$("#ver_destacado").is(':checked')+'&limit='+$("#limite").val(), function(data) {
		if (data.destacado == "false") {
			$("#ver_destacado").attr("checked",false);
		}
		else {
			$("#ver_destacado").attr("checked",true);
		}
		$("#limite option[value="+data.limit+"]").attr("selected",true);	
		$("#resultMC").html("La configuracion se guardo exitosamente");
	});
}


function menuBackup(){
	$("#modificarC").toggle("fast");
	limpiarResultados();
}

//Carga el combobox de categorias, en agregar y modif producto
function cargarCategorias()
{
	$("#list").html("");
	$("#diagCat").html("");

	var url = "_lib/nombresCategorias.php";
	var optionString="";
	$.getJSON(url, function(data){
		for(i=0;i<data.length;i++)
		{
			if(i==0)
			{
				optionString = "<option value="+i+" selected>"+data[i]+"</option>";
			}
			else
			{
				
				optionString = "<option value="+i+">"+data[i]+"</option>";
			}
			
			$("#list").append(optionString);
			$("#diagCat").append(optionString);
		}
		
	});
	
}

//
function validarCat(){

	var selec=$("#list option:selected").text();
	
	if(selec=="Otra...")
	{
		$("#otraCat").show('fast');
		$("#categoria").val("null");
	}
	else
	{
		$("#otraCat").hide('fast');
		$("#otraCat:input").val("null");
		$("#categoria").val($("#list").val());
	}
	
}


//Refresca la tabla
function mostrarTablaProductos(){
	
	//Vacio lo que habia antes 
	$("#tbodyProductos").html("");
	
	//Lleno la tabla 
	$.getJSON('_lib/tablaProductos.php', function(data) {
		//Una fila por cada producto nuevo
		for(i=0;i<data.length;i++){
			
			var id = data[i].id;
			var nombre = data[i].nombre;
			var desc= data[i].desc;
			var precio= data[i].precio;
			var stock = data[i].stock;
			var cat = data[i].cat;
			var marca = data[i].marca;
						
			var fila = "<tr align='center'> "+
							"<td>"+id+"</td>"+
							"<td> <span class='spanProducto'>"+nombre+"</span></td>"+
							"<td> <span class='spanProducto'>"+desc+"</span> </td>"+
							"<td> <span class='spanProducto'>"+precio+"</span> </td>"+
							"<td> <span class='spanProducto'>"+stock+"</span> </td>"+			
							"<td> <span class='spanProducto'>"+cat+"</span></td>"+
							"<td> <span class='spanProducto'>"+marca+"</span> </td>"+
							"<td><img class='link editProducto' src='img/editIcon.png' /> </td>"+
							"<td><img class='link deleteProducto' src='img/deleteIcon.png' /></td>"+
					   "</tr>";
			
			
			$("#tbodyProductos").append(fila);
		}
						
		});
	
	
	//Cuando ya haya cargado todas las filas de la tabla, asigno los oyentes de click
	$(".editProducto").live('click',function(){
		
		var id;
		id=$(this).parent().parent().children(':first-child').text();
		
		nombre=$(this).parent().parent().children(':first-child').next().text();
		desc=$(this).parent().parent().children(':first-child').next().next().text();
		precio=$(this).parent().parent().children(':first-child').next().next().next().text();
		stock=$(this).parent().parent().children(':first-child').next().next().next().next().text();
		categoria=$(this).parent().parent().children(':first-child').next().next().next().next().next().text();
		marca=$(this).parent().parent().children(':first-child').next().next().next().next().next().next().text();
		
			$("#hiddenId").val(id);
			$("#diagName").val(nombre);
			$("#diagDesc").val(desc);
			$("#diagPrecio").val(precio);
			$("#diagStock").val(stock);
			$("#diagMarca").val(marca);
		
			dialogoModif();
		
			$("#dialogModificarProd" ).dialog( "open" );
		
		
	});
	
	$(".deleteProducto").live('click',function(){
		var id;
		id=$(this).parent().parent().children(':first-child').text();
		nombre=$(this).parent().parent().children(':first-child').next().text();
		$("#deleteId").val(id);
		$("#deleteInfo").text("Está a punto de eliminar '"+nombre+"' con ID: "+id+". \n¿Está seguro?");
		dialogoElim(id);
		
		$("#dialogElim").dialog("open");
	
	});
}//end mostrarTablaProductos

//Refresca la tabla
function mostrarTablaCategorias(){
	
	//Vacio lo que habia antes 
	$("#tbodyCategorias").html("");
	
	//Lleno la tabla 
	$.getJSON('_lib/tablaCategorias.php', function(data) {
		//Una fila por cada producto nuevo
		for(i=0;i<data.length;i++){
			
			var id = data[i].id;
			var nombre = data[i].nombre;
			var desc= data[i].desc;
			var nro_likes = data[i].nro_likes;
			var fila = "<tr align='center'> "+
							"<td>"+id+"</td>"+
							"<td> <span class='spanProducto'>"+nombre+"</span></td>"+
							"<td> <span class='spanProducto'>"+desc+"</span> </td>"+
							"<td> <span class='spanProducto'>"+nro_likes+"</span> </td>"+
							"<td><img class='link editCategoria' src='img/editIcon.png' /> </td>"+
							"<td><img class='link deleteCategoria' src='img/deleteIcon.png' /></td>"+
					   "</tr>";
			
			
			$("#tbodyCategorias").append(fila);
		}
						
		});
	
	
	//Cuando ya haya cargado todas las filas de la tabla, asigno los oyentes de click
	$(".editCategoria").live('click',function(){
		
		var id;
		id=$(this).parent().parent().children(':first-child').text();
		
		nombre=$(this).parent().parent().children(':first-child').next().text();
		desc=$(this).parent().parent().children(':first-child').next().next().text();
		nro_likes=$(this).parent().parent().children(':first-child').next().next().next().text();
		
			$("#hiddenIdCat").val(id);
			$("#diagCatName").val(nombre);
			$("#diagCatDesc").val(desc);
			$("#diagCatLikes").val(nro_likes);
		
			dialogoModifCat();
		
			$("#dialogModificarCat" ).dialog( "open" );
		
		
	});
	
	$(".deleteCategoria").live('click',function(){
		var id;
		id=$(this).parent().parent().children(':first-child').text();
		nombre=$(this).parent().parent().children(':first-child').next().text();
		$("#deleteIdCat").val(id);
		$("#deleteInfoCat").text("Está a punto de eliminar la categoría '"+nombre+"' con ID: "+id+". ¿Está seguro?");
		dialogoElimCat(id);
		
		$("#dialogElimCat").dialog("open");
	
	});
}//end mostrarTablaCategorias


//Refresca la tabla
function mostrarTablaImagenes(){
	
	$("#tbodyImagenes").html("");
	
	
	//Lleno la tabla 
	$.ajax({
			async:false,
			url:'_lib/tablaProductos.php',
			dataType: "json",
			success: function(data) {
		
			var ids=new Array();
			var nombres=new Array();
			//Una fila por cada producto nuevo
			for(i=0;i<data.length;i++){
				var id = data[i].id;
				var nombre = data[i].nombre;
		
			$.ajax({
					async:false,
					url:'_lib/imagenes.php?id='+id,
					dataType: "json",
					success: function(images) {
					
							var fila = "<tr align='center'> "+
											"<td>"+id+"</td>"+
											"<td> <span class='spanImg'>"+nombre+"</span></td>";
							var strAux="";
							for(j=0;j<images.length;j++){
								if(j>0)
									strAux+=", ";
								
								if(images[j]!="productos/noimage.png")
									strAux+="<span class='link imageText'>"+images[j].substring(images[j].lastIndexOf("/")+1,images[j].length)+"</span>";			
							}
							fila+= "<td width='300'>"+strAux+"</td>";
								
								
							fila+= "<td><img class='link agregarImg' src='img/addIcon.png' /> </td>"+
								   "<td><img class='link deleteImg' src='img/deleteIcon.png' /></td>"+
									   "</tr>";
					
						
						$("#tbodyImagenes").append(fila);
				
				}
			});//end JSON images
		}//endfor
		
						
	}});//endJSON tablaProd
	
	
	
	$(".agregarImg").live('click',function(){
		
		var id;
		id=$(this).parent().parent().children(':first-child').text();
		nombre=$(this).parent().parent().children(':first-child').next().text();
	//	alert("Quiere agregarle una imagen al prod "+id);
		$('#idImgUpload').val(id);
		$('#uploadText').text("Agregar imágenes al producto ID: "+$('#idImgUpload').val()+" '"+nombre+"'");
		
			$(function() {
			$('#file_upload').uploadify({
								'auto'	: false,
						        'swf'      : '_lib/uploadify.swf',
						        'uploader' : '_lib/uploadify.php',
						        'method'   : 'post',
			    				'formData' : { 'id' : $('#idImgUpload').val() },
			    				'queueID'  : 'file_upload_queue',
			    				'fileObjName': 'Filedata',
			    				'buttonText':'Elegir Im&aacute;genes..',
			    				'onUploadError' : function(file, errorCode, errorMsg, errorString) {
								            jAlert('El archivo ' + file.name + ' no pudo ser subido: ' + errorString);
								       },
								'onUploadSuccess' : function(file, data, response) {
									
											if(data.charAt(0)=="1")
									   			respuestin= "\nEl path completo al archivo es: \n"+data.substring(1,data.length);
									   		else
									   			respuestin= "\nSin embargo el servidor respondió: \n'"+data+"'";
											
								            jAlert('Se completó la carga de ' + file.name + '. '+respuestin);
								        }   
								    
						    });
		});
		
		//Se mueve la atencion al div de agregar nueva imagen
		$('#agregarI').hide();
		$('#nuevaImg').show();
	
		
	});
	
	$(".deleteImg").live('click',function(){
		var id;
		id=$(this).parent().parent().children(':first-child').text();
		nombre=$(this).parent().parent().children(':first-child').next().text();
		
		alert("Quiere borrarle una imagen al prod "+id);
		
	});
	
	//preview de la img al clickearla
		$(".imageText").live('click',function(){
		
		id=$(this).parent().parent().children(':first-child').text();
		file=$(this).text();
		$.slimbox("productos/producto"+id+"/"+file,file,{overlayOpacity: 0.6,
														loop:false,
														initialWidth: 800,
														initialHeight: 600,
												        captionAnimationDuration: 1,
												        imageFadeDuration: 1,
												        counterText: "Imagen {x} de {y} ",
												        closeKeys: [27, 88],
												        previousKeys: [37, 80],
												        nextKeys: [39, 83]
												        });
		
	});
	
	
}

//Se invoca cuando se mandan a cargar las imagenes!
function doUpload(){
	
	if($('#file_upload_queue').children().size() >0)
			$('#file_upload').uploadify('upload');
	else
			jAlert("No hay imágenes para subir...seleccione al menos una");
}

//Se invoca cuando el usuario presiono para dejar de agregar imagenes de ese producto
function finishUpload(){
	$("#nuevaImg").hide();
	mostrarTablaImagenes();
	$("#agregarI").show();
}

	
//Inicializa el dialog de modificar productos
function dialogoModif (){
	
	var name = $( "#diagName" ),
			desc = $( "#diagDesc" ),
			precio = $( "#diagPrecio" ),
			stock = $( "#diagStock" ),
			categoria = $( "#diagCat" ),
			marca = $( "#diagMarca" ),
			allFields = $( [] ).add( name ).add( desc ).add( precio ).add(stock).add(categoria).add(marca),
			tips = $( ".validacion" );

		function updateTips( t ) {
			tips
				.text( t )
				.addClass( "ui-state-highlight" );
			setTimeout(function() {
				tips.removeClass( "ui-state-highlight", 1500 );
			}, 500 );
		}

		function checkLength( o, n, min, max ) {
			if ( o.val().length > max || o.val().length < min ) {
				o.addClass( "ui-state-error" );
				updateTips( "El tamaño de " + n + " debe ser entre " +
					min + " y " + max + " caracteres." );
				return false;
			} else {
				return true;
			}
		}

		function checkRegexp( o, regexp, n ) {
			if ( !( regexp.test( $.trim(o.val()) ) ) ) {
				o.addClass( "ui-state-error" );
				updateTips( n );
				return false;
			} else {
				return true;
			}
		}
		
		$( "#dialogModificarProd" ).dialog({
			autoOpen: false,
			height: 300,
			width: 350,
			modal: true,
			buttons: {
				"Modificar producto": function() {
					var bValid = true;
					allFields.removeClass( "ui-state-error" );

					bValid = bValid && checkLength( name, "Nombre", 1, 80 );
					bValid = bValid && checkLength( desc, "Descripción", 1, 80 );
					bValid = bValid && checkLength( precio, "Precio", 1, 20 );
					bValid = bValid && checkLength( stock, "Stock", 1, 10 );
					bValid = bValid && checkLength( marca, "Marca", 1, 40 );

					bValid = bValid && checkRegexp( name, /^[a-z|A-Z]([0-9a-z_-A-Z ])+$/i, "El nombre del producto sólo puede contener letras, números y guiones, empezando con una letra." );
					bValid = bValid && checkRegexp( desc, /^[a-z|A-Z]([0-9a-zA-Z ,.-])+$/i, "La descripción del producto sólo puede contener letras, números, guiones, comas y puntos, empezando con una letra." );
              		//bValid = bValid && checkRegexp( precio,/^  $/i, "El precio debe ser un número con dos cifras decimales, separar con punto o coma es indistinto");
					bValid = bValid && checkRegexp( stock, /^([0-9]|[1-9][0-9]+)$/i, "El stock debe ser un número entero." );
					bValid = bValid && checkRegexp( marca, /^[a-z|A-Z ]([0-9a-z_A-Z ])+$/i, "La marca del producto sólo puede contener letras, números y guiones bajos, empezando con una letra." );
         
					
					if ( bValid ) { //Si se validaron los campos
						
						//Modificar el producto en la BD
						$.post("_lib/modificarProd.php", //PHP file to send POST to
			                { 
			                	'id' : $("#hiddenId").val(),
	                            'name' : name.val(),
                                'desc': desc.val(),
                                'precio': precio.val(),
                                'stock' : stock.val(),
                                'categoria' : $("#diagCat option:selected").text(),
                                'marca' : marca.val()
							 }, //POST fields to send
			                function(returned) { //What to do if the POST finishes. 'returned' is the value recieved back from the script.
			                        if (returned == 'Exito') {
			                                //PHP retorna 'Exito'
	                                        alert('¡Se completó la modificación con éxito!'); 
	                                        //Refrescar la tabla
											mostrarTablaProductos();
											$("#dialogModificarProd").dialog( "close" );                                 
			                        } else {
			                                alert('Ha ocurrido algun error en el procesamiento de los datos: '+returned);
			                              	 $("#dialogModificarProd").dialog( "close" );
			                               }
			                    });
					}
				},
				"Cancelar": function() {
					allFields.val( "" ).removeClass( "ui-state-error" );
					$("#dialogModificarProd").dialog( "close" );
				}
			},
			close: function() {
				allFields.val( "" ).removeClass( "ui-state-error" );
			}
		});	
}

//Inicializa el dialog de eliminar producto
function dialogoElim(id){
	
	$("#dialogElim").dialog({
			autoOpen: false,
			height: 200,
			width: 250,
			modal: true,
			buttons: {
				"Eliminar producto": function() {
				$.post("_lib/eliminarProd.php", //PHP file to send POST to
	                { 
	                	'id' : id
                    }, //POST fields to send
	                function(returned) { //What to do if the POST finishes. 'returned' is the value recieved back from the script.
	                        if (returned == 'Exito') {
	                                //si PHP retorna 'Exito'
                                    alert('¡Se completó la eliminación con éxito!'); 
                                                                        
                                    //Refrescar la tabla
									mostrarTablaProductos();
									$("#dialogElim").dialog( "close" );                                 
	                        } else {
	                                alert('Ha ocurrido algun error en el procesamiento de los datos: '+returned);
	                              	 $("#dialogElim").dialog( "close" );
	                               }
	                    });
				},
				"Cancelar": function() {
					
					$("#dialogElim").dialog( "close" );
				}
			},
			close: function() {
			}
		});
}//end dialogElim

//Inicializa el dialog de modificar categorias
function dialogoModifCat (){
	
	var name = $( "#diagCatName" ),
			desc = $( "#diagCatDesc" ),
			nro_likes = $( "#diagCatLikes" ),
			allFields = $( [] ).add( name ).add( desc ).add( nro_likes ),
			tips = $( ".validacion" );

		function updateTips( t ) {
			tips
				.text( t )
				.addClass( "ui-state-highlight" );
			setTimeout(function() {
				tips.removeClass( "ui-state-highlight", 1500 );
			}, 500 );
		}

		function checkLength( o, n, min, max ) {
			if ( o.val().length > max || o.val().length < min ) {
				o.addClass( "ui-state-error" );
				updateTips( "El tamaño de " + n + " debe ser entre " +
					min + " y " + max + " caracteres." );
				return false;
			} else {
				return true;
			}
		}

		function checkRegexp( o, regexp, n ) {
			if ( !( regexp.test( $.trim(o.val()) ) ) ) {
				o.addClass( "ui-state-error" );
				updateTips( n );
				return false;
			} else {
				return true;
			}
		}
		
		$( "#dialogModificarCat" ).dialog({
			autoOpen: false,
			height: 300,
			width: 350,
			modal: true,
			buttons: {
				"Modificar categoría": function() {
					var bValid = true;
					allFields.removeClass( "ui-state-error" );

					bValid = bValid && checkLength( name, "Nombre", 1, 100 );
					bValid = bValid && checkLength( desc, "Descripción", 1, 200 );
					bValid = bValid && checkLength( nro_likes, "Likes", 1, 10 );

					bValid = bValid && checkRegexp( name, /^[a-z|A-Z]([0-9a-z_A-Z -])+$/i, "El nombre de la categoría sólo puede contener letras, números y guiones bajos, empezando con una letra." );
					bValid = bValid && checkRegexp( desc, /^[a-z|A-Z]([0-9a-zA-Z ,.-])+$/i, "La descripción de la categoría sólo puede contener letras, números, comas y puntos, empezando con una letra." );
					bValid = bValid && checkRegexp( nro_likes, /^([0-9]|[1-9][0-9]+)$/i, "La cantidad de likes debe ser un número entero." );
         
					
					if ( bValid ) { //Si se validaron los campos
						
						//Modificar el producto en la BD
						$.post("_lib/modificarCat.php", //PHP file to send POST to
			                { 
			                	'id' : $("#hiddenIdCat").val(),
	                            'name' : name.val(),
                                'desc': desc.val(),
                                'nro_likes': nro_likes.val(),
							 }, //POST fields to send
			                function(returned) { //What to do if the POST finishes. 'returned' is the value recieved back from the script.
			                        if (returned == 'Exito') {
			                                //PHP retorna 'Exito'
	                                        alert('¡Se completó la modificación con éxito!'); 
	                                        //Refrescar la tabla
											mostrarTablaCategorias();
											$("#dialogModificarCat").dialog( "close" );                                 
			                        } else {
			                                alert('Ha ocurrido algun error en el procesamiento de los datos: '+returned);
			                              	 $("#dialogModificarCat").dialog( "close" );
			                               }
			                    });
					}
				},
				"Cancelar": function() {
					allFields.val( "" ).removeClass( "ui-state-error" );
					$("#dialogModificarCat").dialog( "close" );
				}
			},
			close: function() {
				allFields.val( "" ).removeClass( "ui-state-error" );
			}
		});	
}//end dialogoModificarCat

//Inicializa el dialog de eliminar categoria
function dialogoElimCat(id){
	
	$("#dialogElimCat").dialog({
			autoOpen: false,
			height: 200,
			width: 250,
			modal: true,
			buttons: {
				"Eliminar categoría": function() {
				$.post("_lib/eliminarCat.php", //PHP file to send POST to
	                { 
	                	'id' : id
                    }, //POST fields to send
	                function(returned) { //What to do if the POST finishes. 'returned' is the value recieved back from the script.
	                        if (returned == 'Exito') {
	                                //si PHP retorna 'Exito'
                                    alert('¡Se completó la eliminación con éxito!'); 
                                                                        
                                    //Refrescar la tabla
									mostrarTablaCategorias();
									$("#dialogElimCat").dialog( "close" );                                 
	                        } else {
	                                alert('Ha ocurrido algun error en el procesamiento de los datos: '+returned);
	                              	 $("#dialogElimCat").dialog( "close" );
	                               }
	                    });
				},
				"Cancelar": function() {
					
					$("#dialogElimCat").dialog( "close" );
				}
			},
			close: function() {
			}
		});
}//end dialogElimCat


//Inicializa el dialog de agregar imagen

function dialogAgregarImg(id){
	
	$("#dialogAgregarImg").dialog({
			autoOpen: false,
			height: 200,
			width: 250,
			modal: true,
			buttons: {
				"Terminar": function() {
					
					alert("confirmacion");
					$("#dialogAgregarImg").dialog( "close" );
				
				},
				"Cancelar": function() {
					
					$("#dialogAgregarImg").dialog( "close" );
				}
			},
			close: function() {
			}
		});
}//end dialogAgregarImg
