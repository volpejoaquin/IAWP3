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
		$("#imgProdDes").attr("src","productos/producto"+destacado.id+".jpg");
		$("#pDestacadoNom").html(destacado.nombre);
		$("#pDestacadoDesc").html(destacado.descripcion);
		$("#pDestacadoMarca").html("Marca: "+destacado.marca);
		$("#pDestacadoPrecio").html(destacado.precio);
		$("#pDestacadoCantComent").html(destacado.cantComent);

		//Verifica si hay mas productos en el sistema
		var haymas = data.masproductos;
		existenMasProductos(haymas);
		
		oyentesItemProducto();
	});	
	

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
				
				oyentesItemProducto();
		});
			
		
	});
	
	
});

function oyentesItemProducto() {
	console.log("agrega oyentes botones nuevos");

	//Oyente para cada producto que empieza con id iprod. Ej: iprod1, iprod2
	$("[id^='iprod']").click(function() {
		console.log("abrio :"+textid);
		var textid = this.id;
		var prodId = textid.replace("iprod","");
		
		$.getJSON('_lib/producto.php?id='+prodId+'', function(data) {
			console.log(data);
			var productos = data.productos;
			$("#imgProdDes").attr("src","productos/producto"+productos[0].id+".jpg");
			$("#pDestacadoNom").html(productos[0].nombre);
			$("#pDestacadoDesc").html(productos[0].descripcion);
			$("#pDestacadoMarca").html("Marca: "+productos[0].marca);
			$("#pDestacadoPrecio").html(productos[0].precio);
			$("#pDestacadoCantComent").html(productos[0].cantComent);	
			
		});
		
		$("#tituloProductos").html("Comentarios");
		$("#vermas").hide();
		$("#nomascoment").show();
		$("#productos").hide("slow");	
	});
}

function agregarProductos(productos) {
	for (i=0; i<productos.length;i++) {
		id = productos[i].id;
		nombre = productos[i].nombre;
		descripcion = productos[i].descripcion;
		cantComent = productos[i].cantComent;
		precio = productos[i].precio;
		marca = productos[i].marca;

		producto = "<article class='post'>\
							<div class='ftimg'>\
								<img src='productos/producto"+id+".jpg' alt='img1' width='204' height='128'>\
							</div>\
							<header>\
								<h3 id='iprod"+id+"' class='link'>"+nombre+"</h3>\
							</header>\
							<p class='posttext pComunDesc'>"+descripcion+"</p>\
							<footer>\
								<span class='author'>Marca: "+marca+"</span>\
								<span class='comments'>$"+precio+"</span>\
								<span class='comments' id='iprod"+id+"'><a href='#'>"+cantComent+" comentarios</a></span>\
							</footer>\
						</article>";
		$("#productos").append(producto);
		
	}		
}

function existenMasProductos(haymas) {
	if (haymas == false) {
		$("#vermas").html("&#171; No hay mas productos &#187;");
		$("#vermas").removeClass("link");
	} 
	$("#vermas").show();
}
