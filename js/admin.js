
$(document).ready(function() {
	
	$("#divA").hide();
	$("#divB").hide();
	$("#divC").hide();
	$("#divD").hide();
	$("#otraCat").hide();

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
					$('#result').html(data);
				});
			
		}
		});
		

});//fin document.ready


//Muestra los componentes para agregar un prod
function menuAgregarProd(){
	$("#divA").toggle("fast");
	
}

function menuModificarProd(){
	$("#divB").toggle("fast");
	
}

function menuConfigurar(){
	$("#divC").toggle("fast");
	
}

function menuBackup(){
	$("#divD").toggle("fast");
	
}

//Carga el combobox de categorias
function cargarCategorias()
{
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
		$("#otraCat").show("fast");
	}
	else
	{
		$("#categoria").val($("#list option:selected").val());
		$("#otraCat").hide("fast");
		$("#otraCat:input").val("");
	}
	
}



function agregar()
{
	alert("entre a agregar()....");

/*	var array= new Array();
	var url = "_lib/agregarProd.php?nombre="+$("#nombre").val()+
								"&descripcion="+$("#descripcion").val()+
								"&precio="+$("#precio").val()+
								"&stock="+$("#stock").val()+
								"&marca="+$("#marca").val()+
								"&tags="+$("#tags").val();
								*/
								
								
	if($("#list option:selected").text()=="Otra...")
	{
		url+="&nuevaCat="+$("#list option:selected").val();
	}
	else
	{
		url+="&categoria="+$("#categoria").val();
	}
					
}

$(document).ready(function() {
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
});


