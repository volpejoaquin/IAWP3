$(document).ready(function() {
	limit=5;
	inic=0;
	
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
		
	});	
	
	parametros = parametrosUrl();
	if (parametros["idProd"] != undefined) {
		mostrarProducto(parametros["idProd"]);
	}
	
	
	//Agrega oyente para el paginado de la lista de productos
	$("#vermas").click(function() {
		//Animacion de carga
		$("#vermas").hide();
		$("#imgLoading").show();
		
		//Proximos 5 
		inic+=5;
		
		//Busca 5 productos mas
		$.getJSON('_lib/productos.php?limit='+limit+'&inic='+inic+'', function(data) {
				
				//Recorre los nuevos productos
				var productos = data.productos;
				agregarProductos(productos);	
				
				//Verifica si hay mas productos
				var haymas = data.masproductos;
				existenMasProductos(haymas);
				
				$("#imgLoading").hide();			
				
		});
			
		
	});
	
	
});




