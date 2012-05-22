var categorias = true;

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

		parametros = parametrosUrl();
		if (parametros["idCat"] != undefined) {
			verCategoria(parametros["idCat"]);
		}
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
			precio = productos[i].precio;
			marca = productos[i].marca;
			catId = productos[i].catid;
			catNombre = productos[i].nombrecat;
		
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
								<span class='comments' id='icat"+catId+"'><a href='#'>"+catNombre+"</a></span>\
							</footer>\
						</article>";
			$("#productos").append(producto);
			
		}		

		var haymas = data.masproductos;
		if (haymas == false) {
			$("#vermas").html("&#171; No hay mas productos &#187;");
			$("#vermas").removeClass("link");
		} else {
			$("#divvermas").show();
		}
	});	
}

