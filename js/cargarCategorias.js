$(document).ready(function() {
	
	$.getJSON('_lib/categorias.php', function(data) {

		for (i=0; i<data.length;i++) {
			id = data[i].id;
			nombre = data[i].nombre;
			descripcion = data[i].descripcion;
			cantProd = data[i].cantProd;
			
			categoria = "<article id='cat"+id+"' class='post'>\
							<header>\
								 <a class='link' onClick='verCategoria("+id+");'><h3>"+nombre+"</h3></a>\
							 </header>\
							 <p>"+descripcion+"</p>\
							 <footer>\
							 <span class='author'>Productos: "+ cantProd+"</span>\
							 <span id='verCat"+id+"' class='permalink link'><a onClick='verCategoria("+id+");'>Ver Categoria</a></span>\
							 </footer>\
						</article>";
	
			$("#categorias").append(categoria);
		}		
	});	
});

function verCategoria(id) {
	var idCat = "cat"+id;
	var idverCat = "verCat"+id;
	$("[id!='"+idCat+"'][id!='categorias'][id^='cat']").hide("slow");
	$("[id='"+idverCat+"']").hide();
	
}

function verCategorias() {
	$("[id!='categorias'][id^='cat']").show("slow");
	$("[id^='verCat']").show("slow");
}