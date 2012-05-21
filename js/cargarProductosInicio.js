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
		
		oyentesItemProducto();
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
				
				oyentesItemProducto();
		});
			
		
	});
	
	
});

function parametrosUrl() {
	query=window.location.search.substring(1);
	q=query.split("&");
	vars=[];
	for(i=0;i<q.length;i++){
		x=q[i].split("=");
		k=x[0];
		v=x[1];
		vars[k]=v;
	}
	return vars;
}

function agregarParametrosUrl(id,valor) {
	query=window.location.search.substring(1);
	q=query.split("&");
	vars=[];
	vars[id] = valor;
	window.location.search = "?"+vars.toString();
}

function oyentesItemProducto() {

	//Oyente para cada producto que empieza con id iprod. Ej: iprod1, iprod2
	$("[id^='iprod']").click(function() {
		var textid = this.id;
		var prodId = textid.replace("iprod","");
		
		mostrarProducto(prodId);
		
	});
}

function mostrarProducto(prodId) {
	$.getJSON('_lib/producto.php?id='+prodId+'', function(data) {
		var productos = data.productos;
		agregarProductoDestacado(productos[0]);			
	});
		
	$("#tituloProductos").html("Comentarios");
	$("#divvermas").hide();
	$("#productos").hide("slow");
	
	$("#likes").show();
	$("#comentarios").show();
	
}

function agregarProductoDestacado(destacado) {
	$("[name='imgProdDes']").attr("src","productos/producto"+destacado.id+".jpg");
	$("[name='imgProdDes']").attr("id","iprod"+destacado.id+"");		
	$("[name='pDestacadoNom']").html(destacado.nombre);
	$("[name='pDestacadoNom']").attr("id","iprod"+destacado.id+"");
	$("#pDestacadoDesc").html(destacado.descripcion);
	$("#pDestacadoMarca").html("Marca: "+destacado.marca);
	$("#pDestacadoPrecio").html(destacado.precio);
	$("#pDestacadoCantComent").html(destacado.cantComent);
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
								<img id='iprod"+id+"' class='link' src='productos/producto"+id+".jpg' alt='img1' width='204' height='128'>\
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
