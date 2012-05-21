$(document).ready(function() {
	$.getJSON('_lib/categorias.php', function(data) {
		for (i=0; i<data.length;i++) {
			categoria = "";
			id = data[i].id;
			nombre = data[i].nombre;
			descripcion = data[i].descripcion;
			cantProd = data[i].cantProd;
			
			categoria += "<li><a href='#'>"+nombre+"</a>("+cantProd+")</li>";
		
			$("#menuCategorias").append(categoria);
		}		
		
		oyentesListaProductos();
	});	

	
});

function oyentesListaProductos() {
	$("#listaProductos").click(function() {
			$("#tituloProductos").html("Lista de productos");
			$("#productos").show("slow");	
			$("#vermas").show();
			$("#nomascoment").hide();
	});	
}