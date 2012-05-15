$(document).ready(function() {
	$.getJSON('_lib/productos.php', function(data) {

		$("#imgProdDes").attr("src","productos/producto"+data.destacado.id+".jpg");
		$("#pDestacadoNom").html(data.destacado.nombre);
		$("#pDestacadoDes").html(data.destacado.descripcion);
		
		for (i=0; i<data.length;i++) {
			
		}		
	});	
});