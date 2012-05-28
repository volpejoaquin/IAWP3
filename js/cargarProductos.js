limit=8;
inic=0;
verdestacado = "true";

//Menu current
$(document).ready(function() {
	parametros = parametrosUrl();
	if (parametros["mc"] != undefined) {
		$("[id^=menu"+parametros['mc'][0]+""+parametros['mc'][1]+"]").addClass("current");	
		if (parametros["mc"] == "Logout") {
			$("#menuAdmin").addClass("current");	
		}
	} else {
		$("#menuInicio").addClass("current");		
	}	
	
	
			
	
	
});//end of document.ready

function agregarProductoDestacado(destacado, producto) {
	if (verdestacado == "true" || producto) {
		$("[name='imgProdDes']").attr("src","productos/producto"+destacado.id+".jpg");
		$("[name='imgProdDes']").attr("id","iprod"+destacado.id+"");
		$("[name='pDestacadoNom']").html(destacado.nombre);
		$("[name='pDestacadoNom']").attr("id","iprod"+destacado.id+"");
		$("#pDestacadoDesc").html(destacado.descripcion);
		$("#pDestacadoMarca").html("Marca: "+destacado.marca);
		$("#pDestacadoPrecio").html(destacado.precio);
		$("#pDestacadoCategoria").html(destacado.nombrecat);
		$("#pDestacadoCategoria").attr("href","http://localhost:8080/IAW-Proy3/index.php?mc=Categorías&idCat="+destacado.catid);
		$("#nroVisita").html(destacado.nro_visitas);
		
		$("#featured").show();
		
		//Agrego slimbox a las imagenes
		$("[name='imgProdDes']").slimbox({overlayOpacity: 0.6,
						loop:true,
						initialWidth: 500,
						initialHeight: 500,
				        captionAnimationDuration: 1,
				        imageFadeDuration: 1,
				        counterText: "Imagen {x} de {y} ",
				        closeKeys: [27, 88],
				        previousKeys: [37, 80],
				        nextKeys: [39, 83]
				        },
					function(el) {return [el.src, destacado.nombre];},
					function(el) {return true;}		
		);
		
		
	} else {
		$("#featured").hide();
	}
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
		nrovis = productos[i].nro_visitas;

		producto = "<article class='post'>\
							<div class='ftimg'>\
								<a href='index.php?mc=Inicio&idProd="+id+"'><img id='iprod"+id+"' class='link' src='productos/producto"+id+".jpg' alt='img1' width='204' height='128'></a>\
							</div>\
							<header>\
								<h3 id='iprod"+id+"' class='link'>"+nombre+"</h3>\
							</header>\
							<p class='posttext pComunDesc'>"+descripcion+"</p>\
							<footer>\
								<span class='comments' title='Marca'>"+marca+"</span>\
								<span class='comments precio' title='Precio'>"+precio+"</span>\
								<span class='comments visitas' title='Numero de visitas'>"+nrovis+"</span>\
								<span class='comments' id='icat"+catId+"' title='Categoria'><a class='categoria' href='http://localhost:8080/IAW-Proy3/index.php?mc=Categorías&idCat="+catId+"'>"+catNombre+"</a></span>\
							</footer>\
						</article>";
		$("#productos").append(producto);
	}	
	
	//Seleccionar los anchor que tienen una img adentro 
	//$("a:has(img)").slimbox();
	
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
		
		agregarProductoDestacado(productos[0],true);
		
	});
		
	$("#likes").show();
	$("#likesL").attr("data-href","http://localhost:8080/IAW-Proy3/index.php?mc=Inicio&amp;idProd="+prodId);
	$("#comentarios").show();
	$("#comentariosC").attr("data-href","http://localhost:8080/IAW-Proy3/index.php?mc=Inicio&amp;idProd="+prodId);
	
	$("#tituloProductos").html("Comentarios");
	$("#divvermas").hide("slow");
	$("#productos").hide("slow");
	
	$("#imgDestacado").removeClass("ftheading");
	$("#imgDestacado").addClass("ftheadingP");
}

function mostrarProductos(catId,ord) {
	var url = '_lib/productos.php?id='+catId+'&limit='+limit+'&inic='+inic+'';
	if (ord != undefined) {
		url = '_lib/productos.php?id='+catId+'&limit='+limit+'&inic='+inic+'&ord='+parametros["ord"];
	}
	
	$.getJSON(url, function(data) {
		//Recorre los ultimos 5 productos
		var productos = data.productos;
		agregarProductos(productos);		
		
		//Verifica si hay mas productos en el sistema
		var haymas = data.masproductos;
		existenMasProductos(haymas);
		
		console.log("mostrar productos");
		verMasOyente(catId,ord);
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


function verMasOyente(catId,ord) {
	//Agrega oyente para el paginado de la lista de productos
	$("#vermas").click(function() {
		//Animacion de carga
		$("#vermas").hide();
		$("#imgLoading").show();
		
		
		//Proximos 5 
		inic+= limit;
		
		//Si hay un search hay que mandarle tmb el search! solo los productos que cumplan con esa condicion
		
		if (catId != undefined) {
			if (ord != undefined) {
				url = '_lib/productos.php?id='+catId+'&limit='+limit+'&inic='+inic+'&ord='+parametros["ord"];
			} 
			else  {
				url = '_lib/productos.php?id='+catId+'&limit='+limit+'&inic='+inic+'';
			}
		}
		else {
			if (ord != undefined) {
				url = '_lib/productos.php?limit='+limit+'&inic='+inic+'&ord='+parametros["ord"];
			} 
			else  {
				url = '_lib/productos.php?limit='+limit+'&inic='+inic+'';
			}
		}
	
		//Busca 5 productos mas
		$.getJSON(url, function(data) {
				
				//Recorre los nuevos productos
				var productos = data.productos;
				agregarProductos(productos);	
				
				//Verifica si hay mas productos
				var haymas = data.masproductos;
				existenMasProductos(haymas);
				
				$("#imgLoading").hide();	
					
				verMasOyente(undefined,parametros["ord"]);
				
		});
			
		
	});
}


