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
		precio = productos[i].precio;
		marca = productos[i].marca;
		catId = productos[i].catid;
		catNombre = productos[i].nombrecat;

		producto = "<article class='post'>\
							<div class='ftimg'>\
								<a href='index.php?mc=Inicio&idProd="+id+"'><img id='iprod"+id+"' class='link' src='productos/producto"+id+".jpg' alt='img1' width='204' height='128'></a>\
							</div>\
							<header>\
								<h3 id='iprod"+id+"' class='link'>"+nombre+"</h3>\
							</header>\
							<p class='posttext pComunDesc'>"+descripcion+"</p>\
							<footer>\
								<span class='author'>Marca: "+marca+"</span>\
								<span class='comments'>$"+precio+"</span>\
								<span class='comments' id='icat"+catId+"'><a href='#'>"+catNombre+"</a></span>\
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
	$("#divvermas").show();
}

function mostrarProducto(prodId) {
	$.getJSON('_lib/producto.php?id='+prodId+'', function(data) {
		var productos = data.productos;
		agregarProductoDestacado(productos[0]);			
	});
		
	
	
	$("#likes").show();
	$("#likesL").attr("data-href","http://localhost:8080/IAW-Proy3/index.php?mc=Inicio&amp;idProd="+prodId);
	$("#comentarios").show();
	$("#comentariosC").attr("data-href","http://localhost:8080/IAW-Proy3/index.php?mc=Inicio&amp;idProd="+prodId);
	
	$("#tituloProductos").html("Comentarios");
	$("#divvermas").hide("slow");
	$("#productos").hide("slow");
}

function mostrarProductos(catId) {
	var url = '_lib/productos.php?id='+catId+'';
	$.getJSON(url, function(data) {
		//Recorre los ultimos 5 productos
		var productos = data.productos;
		agregarProductos(productos);		
		
		//Verifica si hay mas productos en el sistema
		var haymas = data.masproductos;
		existenMasProductos(haymas);
		
	});	
	
}


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

