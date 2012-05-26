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
	
	$("#divA").hide();
	$("#divB").hide();
	$("#divC").hide();
	$("#divD").hide();
	$("#otraCat").hide();
	$("#dialog-form").hide();
	dialogoModif();

	cargarCategorias();

	$("#menuAgregar").click(menuAgregarProd);
	$("#menuModificar").click(menuModificarProd);
	$("#menuConfigurar").click(menuConfigurar);
	$("#menuBackup").click(menuBackup);
	
	//Validar el formulario de agregar
	$('#agregarForm').validate({
		debug: false,
		rules:
		{
		"nombre":{
		required:true,
		maxlength:40
		},
		"descripcion":{
		required:true,
		maxlength:100
		},
		"marca":{
		required:true,
		maxlength:40
		}},
		
		messages:
		{
		"nombre":{
		required:" **Campo requerido"
		},
		"descripcion":{
		required:" **Campo requerido",
		},
		"marca":{
		required:" **Campo requerido"
		}},
		
		submitHandler: function(form){
			
			$.post('_lib/agregarProd.php', $("#agregarForm").serialize(), function(data) {
					$('#divA').toggle('fast');
					$('#agregarForm').get(0).reset();
					$('#resultA').html(data);
				});
			
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


//Muestra los componentes para agregar un prod
function menuAgregarProd(){
	$("#divA").toggle("fast");
	
}

function menuModificarProd(){
	$("#divB").toggle("fast");
	
	var isHidden = $('#divB').is(':hidden');
	
	if(isHidden!="true")
		//Hace la consulta a la bd y carga los productos a la tabla
		mostrarTablaProductos();
	
}

function menuConfigurar(){
	$("#divC").toggle("fast");
	
}

function menuBackup(){
	$("#divD").toggle("fast");
	
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
		
		$("#list").append("<option value="+(data.length+1)+">Otra...</option>");
	});
	
}

//Se encarga de controlar si el usuario elige crear una nueva categoria en vez de elegir una del combobox
function validarCat(){

	var selec=$("#list option:selected").text();
	
	if(selec=="Otra...")
	{
		$("#categoria").val("");
		$("#otraCat").toggle('fast');
	}
	else
	{
		$("#categoria").val($("#list option:selected").val());
		$("#otraCat").toggle('fast');
		$("#otraCat:input").val("");
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
						
			var fila = "<tr> "+
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
						
		/*	
		//lleno las categorias
		var url = "_lib/nombresCategorias.php";
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
				}
			});	
						
			*/
		});
	
	
	//Cuando ya haya cargado todas las filas de la tabla, asigno los oyentes de click
	$(".editProducto").live('click',function(){
		
		var id;
		id=$(this).parent().parent().children(':first-child').text();
		
			$("#dialog-form" ).dialog( "open" );
		
		
	});
	
	$(".deleteProducto").live('click',function(){
		var id;
		id=$(this).parent().parent().children(':first-child').text();
	
		alert("Quiere borrar el producto> "+id);
	});
	

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
			if ( !( regexp.test( o.val() ) ) ) {
				o.addClass( "ui-state-error" );
				updateTips( n );
				return false;
			} else {
				return true;
			}
		}
		
		$( "#dialog-form" ).dialog({
			autoOpen: false,
			height: 300,
			width: 350,
			modal: true,
			buttons: {
				"Modificar producto": function() {
					var bValid = true;
					allFields.removeClass( "ui-state-error" );

					bValid = bValid && checkLength( name, "Nombre", 1, 30 );
					bValid = bValid && checkLength( desc, "Descripción", 1, 80 );
					bValid = bValid && checkLength( precio, "Precio", 1, 20 );
					bValid = bValid && checkLength( stock, "Stock", 1, 10 );
					bValid = bValid && checkLength( marca, "Marca", 1, 30 );

					bValid = bValid && checkRegexp( name, /^[a-z|A-Z]([0-9a-z_A-Z ])+$/i, "El nombre del producto sólo puede contener letras, números y guiones bajos, empezando con una letra." );
					bValid = bValid && checkRegexp( desc, /^[a-z|A-Z]([0-9a-z_A-Z ])+$/i, "La descripción del producto sólo puede contener letras, números y guiones bajos, empezando con una letra." );
              		//bValid = bValid && checkRegexp( precio,/^  $/i, "El precio debe ser un número con dos cifras decimales, separar con punto o coma es indistinto");
					bValid = bValid && checkRegexp( stock, /^([0-9]|[1-9][0-9]+)$/i, "El stock debe ser un número entero." );
					bValid = bValid && checkRegexp( marca, /^[a-z|A-Z]([0-9a-z_A-Z ])+$/i, "La marca del producto sólo puede contener letras, números y guiones bajos, empezando con una letra." );
         
					
					if ( bValid ) { //Si se validaron los campos
						
						//Modificar el producto en la BD
						$.ajax({
                                          type: "post",
                                          url: "_lib/modificarProd.php",
                                          dataType: "json",
                                          data: {
                                                        'nombre' : name.val(),
                                                        'desc': desc.val(),
                                                        'precio': precio.val(),
                                                        'stock' : stock.val(),
                                                        'categoria' : categoria.val(),
                                                        'marca' : marcal.val() 
                                                },
                                          success: function(data) {
                                                //alert(data);
                                                if(data.success)
                                                {
                                                        alert('success');     
                                                }
                                      }
                                        }); // End ajax method
						
						
						//Refrescar la tabla
						modificarTablaProductos();
						$( this ).dialog( "close" );
					}
					//return false;
				},
				"Cancelar": function() {
					allFields.val( "" ).removeClass( "ui-state-error" );
					$( this ).dialog( "close" );
				}
			},
			close: function() {
				allFields.val( "" ).removeClass( "ui-state-error" );
			}
		});
	
	
}


