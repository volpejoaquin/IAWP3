$(document).ready(function() {

	$.getJSON('_lib/categorias.php', function(data) {

		for (i=0; i<data.length;i++) {
			id = data[i].id;
			nombre = data[i].nombre;
			descripcion = data[i].descripcion;
			cantProd = data[i].cantProd;
			
			categoria = "<article id='cat"+id+"' class='post'>\
							<header>\
								 <a class='link' onClick='verCategoria("+id+");'><h3>"+nombre+"</h3></a>\
							 </header>\
							 <p>"+descripcion+"</p>\
							 <footer>\
							 <span class='author'>Productos: "+ cantProd+"</span>\
							 <span id='verCat"+id+"' class='permalink link'><a onClick='verCategoria("+id+");'>Ver Categoria</a></span>\
							 </footer>\
						</article>";
	
			$("#categorias").append(categoria);
		}		
	});	
});
var categorias = true;

function verCategoria(id) {
	if (categorias == true) {
		var idCat = "cat"+id;
		var idverCat = "verCat"+id;
		$("[id!='"+idCat+"'][id!='categorias'][id^='cat']").hide("slow");
		$("[id='"+idverCat+"']").hide();
		categorias = false;
		cargarProductos(id);		
		$("#listaproductos").show("slow");
		$("#productos").html("");
	} else {
		verCategorias();		
	}
}

function verCategorias() {
	$("[id!='categorias'][id^='cat']").show("slow");
	$("[id^='verCat']").show("slow");
	$("#listaproductos").hide();
	categorias = true;
}

function cargarProductos(id) {
	var url = '_lib/productos.php?id='+id+'';
	$.getJSON(url, function(data) {
		var productos = data.productos;
		
		for (i=0; i<productos.length;i++) {
			
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
							</header>\
							<p class='posttext'>"+descripcion+"</p>\
							<footer>\
								<span class='author'>Marca: "+marca+"</span>\
								<span class='comments'><a href='#'>"+cantComent+" comentarios</a></span>\
							</footer>\
						</article>";
			$("#productos").append(producto);
			
		}		
		
		var destacado = data.destacado;
		
		$("#imgProdDes").attr("src","productos/producto"+destacado.id+".jpg");
		$("#pDestacadoNom").html(destacado.nombre);
		$("#pDestacadoDes").html(destacado.descripcion);
		$("#pDestacadoMarca").html("Marca: "+destacado.marca);
		$("#pDestacadoCantComent").html(destacado.cantComent);

		var haymas = data.masproductos;
		if (haymas == "false") {
			$("#vermas").html("&#171; No hay mas productos &#187;");
			$("#vermas").removeClass("link");
		}
	});	
}

