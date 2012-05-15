$(document).ready(function() {
	$.getJSON('_lib/productos.php', function(data) {
		var productos = data.productos;
	
		for (i=0; i<productos.length;i++) {
			
			console.log(productos[i]);
			id = productos[i].id;
			nombre = productos[i].nombre;
			descripcion = productos[i].descripcion;
			cantComent = productos[i].cantComent;
			marca = productos[i].marca;
			
			producto = "<article class='post'>\
							<div class='ftimg'>\
								<img src='productos/producto"+id+".jpg' alt='img1' width='204' height='128'>\
							</div>\
							<header>\
								<h3>"+nombre+"</h3>\
								<p class='postinfo'>Published on <time>18 August, 2010</time> under <a href='#'>CSS Templates </a></p>\
							</header>\
							<p class='posttext'>"+descripcion+"</p>\
							<footer>\
								<span class='author'>Marca: "+marca+"</span>\
								<span class='permalink'><a href='#permalink'>Leer mas</a></span>\
								<span class='comments'><a href='#'>"+cantComent+" comentarios</a></span>\
							</footer>\
						</article>";
			$("#productos").append(producto);
		}		
		
		var destacado = data.destacado;
		
		$("#imgProdDes").attr("src","productos/producto"+destacado.id+".jpg");
		$("#pDestacadoNom").html(destacado.nombre);
		$("#pDestacadoDes").html(destacado.descripcion);
		$("#pDestacadoDes").html(destacado.descripcion);
		$("#pDestacadoMarca").html("Marca: "+destacado.marca);
		$("#pDestacadoCantComent").html(destacado.cantComent);

		var haymas = data.masproductos;
		
		if (haymas == "false") {
			$("#vermas").html("&#171; No hay mas productos &#187;");
			$("#vermas").removeClass("link");
		}
	});	
});

function cargarMas() {
	$("#textvermas").hide();
	$("#imgLoading").show();
	
	$.getJSON('_lib/productosMas.php', function(data) {
		var productos = data.productos;
	
		for (i=0; i<productos.length;i++) {
			
			console.log(productos[i]);
			id = productos[i].id;
			nombre = productos[i].nombre;
			descripcion = productos[i].descripcion;
			cantComent = productos[i].cantComent;
			marca = productos[i].marca;
			
			producto = "<article class='post'>\
							<div class='ftimg'>\
								<img src='productos/producto"+id+".jpg' alt='img1' width='204' height='128'>\
							</div>\
							<header>\
								<h3>"+nombre+"</h3>\
								<p class='postinfo'>Published on <time>18 August, 2010</time> under <a href='#'>CSS Templates </a></p>\
							</header>\
							<p class='posttext'>"+descripcion+"</p>\
							<footer>\
								<span class='author'>Marca: "+marca+"</span>\
								<span class='permalink'><a href='#permalink'>Leer mas</a></span>\
								<span class='comments'><a href='#'>"+cantComent+" comentarios</a></span>\
							</footer>\
						</article>";
			$("#productos").append(producto);
		}		

		var haymas = data.masproductos;
		
		if (haymas == "false") {
			$("#vermas").html("&#171; No hay mas productos &#187;");
			$("#vermas").removeClass("link");
		} else {
			$("#textvermas").show();		
		}
		
		$("#imgLoading").hide();
	
	});	
}