$(document).ready(function() {
	$.getJSON('_lib/configuracion.php', function(data) {
		limit = data.limit;
		verdestacado = data.destacado;
		
		if (verdestacado == "true") {
			$("#featured").show();
		}
		
		parametros = parametrosUrl();
		if (parametros["ord"] != undefined) {
			url = '_lib/productos.php?limit='+limit+'&inic='+inic+'&ord='+parametros["ord"];
			$("#"+parametros["ord"]).addClass("current");
		} 
		else {
			$("#ult").addClass("current");
			url = '_lib/productos.php?limit='+limit+'&inic='+inic+'';
		}
		//Carga productos destacados y lista de productos
		$.getJSON(url, function(data) {
			//Recorre los ultimos 5 productos
			var productos = data.productos;
			agregarProductos(productos);		
			
			//Agrega el producto destacado
			var destacado = data.destacado;
			agregarProductoDestacado(destacado);

			//Verifica si hay mas productos en el sistema
			var haymas = data.masproductos;
			existenMasProductos(haymas);
			
		});	
		
		
		if (parametros["idProd"] != undefined) {
			mostrarProducto(parametros["idProd"]);
		}
		
		verMasOyente(undefined,parametros["ord"]);
		
	});	
});




