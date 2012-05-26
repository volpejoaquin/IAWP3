$(document).ready(function() {
	$.getJSON('_lib/configuracion.php', function(data) {
		limit = data.limit;
		verdestacado = data.destacado;
		
		if (verdestacado == "true" && parametros["search"] == undefined) {
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
		
		if (parametros["search"] != undefined) {
			url = '_lib/productos.php?search='+parametros["search"]+'&limit='+limit+'&inic='+inic+'';
			$("#textsearch").val(parametros["search"]);
			$("#filtro").html("Filtrado por: <span class='filtar'>"+parametros["search"]+"</span>");

			//Carga productos filtrados y lista de productos
			$.getJSON(url, function(data) {
				//Recorre los ultimos 5 productos
				var productos = data.productos;
				agregarProductos(productos);		

				//Verifica si hay mas productos en el sistema
				var haymas = data.masproductos;
				existenMasProductos(haymas);
				
			});	
		}
		else {
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
		}
		
		
		if (parametros["idProd"] != undefined) {
			mostrarProducto(parametros["idProd"]);
		}
		
		verMasOyente(undefined,parametros["ord"]);
		
	});	
});




