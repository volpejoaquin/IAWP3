$(document).ready(function() {
	$.getJSON('_lib/categorias.php', function(data) {
		console.log(data);
		for (i=0; i<data.length;i++) {
			id = data[i].id;
			nombre = data[i].nombre;
			descripcion = data[i].descripcion;
			cantProd = data[i].cantProd;
			
			categoria = "<article class='post'>\
							<header>\
								 <h3>"+nombre+"</h3>\
							 </header>\
							 <p>"+descripcion+"</p>\
							 <footer>\
							 <span class='author'>Productos: "+ cantProd+"</span>\
							 <span class='permalink'><a href='#permalink'>Ver Categoria</a></span>\
							 </footer>\
							</article>";
	
			$("#categorias").append(categoria);
		}		
	});	
});