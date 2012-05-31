$(document).ready(function() {
	$.getJSON('_lib/categorias.php', function(data) {
		for (i=0; i<data.length;i++) {
			categoria = "";
			id = data[i].id;
			nombre = data[i].nombre;
			descripcion = data[i].descripcion;
			cantProd = data[i].cantProd;
			nrovis = data[i].nro_visitas;
			
			categoria += "<li class='link'><div class='divLiMenu'><a class='catMenu' href='index.php?mc=Categorías&idCat="+id+"&ord=ult'>"+nombre+"</a><span class='productoMenu' title='Cantidad de productos'>"+cantProd+"</span><span class='visitasMenu' title='Cantidad de visitas'>"+nrovis+"</span></div></li>";
		
			$("#menuCategorias").append(categoria);
		}		
		

	});	

	
});
