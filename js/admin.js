
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

});


//Muestra los componentes para agregar un prod
function menuAgregarProd(){
	$("#divA").toggle("slow");
	
}

function menuModificarProd(){
	$("#divB").toggle("slow");
	
}

function menuConfigurar(){
	$("#divC").toggle("slow");
	
}

function menuBackup(){
	$("#divD").toggle("slow");
	
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
			
			$("#Alist").append(optionString);
		}
		
		$("#Alist").append("<option value="+(data.length+1)+">Otra...</option>");
	});
	
	
}

//Se encarga de controlar si el usuario elige crear una nueva categoria en vez de elegir una del combobox
function validarCat(){

	var selec=$("#Alist option:selected").text();
	
	if(selec=="Otra...")
	{
		$("#Acategoria").val("null");
		$("#otraCat").show("slow");
	}
	else
	{
		$("#Acategoria").val($("#Alist option:selected").val());
		$("#otraCat").hide("slow");
	}
	
}


function agregar()
{
	alert($("#Anombre").val());
	alert($("#Anombre").text());
	alert($("#Anombre").html());
	
	var array= new Array();
	var url = "_lib/agregarProd.php?nombre="+$("#Anombre").val()+
								"&descripcion="+$("#Adescripcion").val()+
								"&precio="+$("#Aprecio").val()+
								"&stock="+$("#Astock").val()+
								"&marca="+$("#Amarca").val()+
								"&tags="+$("#Atags").val();
								
	if($("#Alist option:selected").text()=="Otra...")
	{
		url+="&nuevaCat="+$("#Alist option:selected").val();
	}
	else
	{
		url+="&categoria="+$("#Acategoria").val();
	}
								
	alert(url);
	//Hace el ingreso y publica el resultado en el html
	$.get( url,	function(data){
						
						alert ("AGREGADOO!!!");
							$('#Aresult').html(data);
						}
			
	);


}
