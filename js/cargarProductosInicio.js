$(document).ready(function() {
	
	//Carga productos destacados y lista de productos
	$.getJSON('_lib/productos.php?limit='+limit+'&inic='+inic+'', function(data) {
		//Recorre los ultimos 5 productos
		var productos = data.productos;
		agregarProductos(productos);		
		
		//Agrega el producto destacado
		var destacado = data.destacado;
		agregarProductoDestacado(destacado);

		//Verifica si hay mas productos en el sistema
		var haymas = data.masproductos;
		existenMasProductos(haymas);
		console.log(data);
	});	
	
	parametros = parametrosUrl();
	if (parametros["idProd"] != undefined) {
		mostrarProducto(parametros["idProd"]);
	}
	
	
	verMasOyente();
	
	
});




