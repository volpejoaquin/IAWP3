limit=8;
inic=0;
verdestacado = "true";
pathImagenes= new Array();

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
	
	cargarArregloImg();
	
	$("[name='imgProdDes']").live('click',function(){
		
		var strid=$("[name='pDestacadoNom']").attr("id");
		var id=strid.substr(5);
		//alert("prod clickeado "+id);
		
		$.slimbox(getAllImg(id),0,
							{overlayOpacity: 0.6,
							loop:false,
							initialWidth: 800,
							initialHeight: 600,
					        captionAnimationDuration: 1,
					        imageFadeDuration: 1,
					        counterText: "Imagen {x} de {y} ",
					        closeKeys: [27, 88],
					        previousKeys: [37, 80],
					        nextKeys: [39, 83]
					        });
	});
	
	
});//end of document.ready

function agregarProductoDestacado(destacado, producto) {
	if (verdestacado == "true" || producto) {
		$("[name='imgProdDes']").attr("src",getPrimeraImg(destacado.id));
		$("[name='imgProdDes']").attr("id","iprod"+destacado.id+"");
		$("[name='pDestacadoNom']").html(destacado.nombre);
		$("[name='pDestacadoNom']").attr("id","iprod"+destacado.id+"");
		$("[name='pDestacadoNom']").attr("href","index.php?mc=Inicio&idProd="+destacado.id);
		$("#pDestacadoDesc").html(destacado.descripcion);
		$("#pDestacadoMarca").html(destacado.marca);
		$("#pDestacadoPrecio").html(destacado.precio);
		$("#pDestacadoCategoria").html(destacado.nombrecat);
		$("#pDestacadoCategoria").attr("href","index.php?mc=Categorías&idCat="+destacado.catid);
		$("#nroVisita").html(destacado.nro_visitas);
		
		$("#featured").show();
		
		
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
		imagen="";

		producto = "<article class='post'> "+
						"	<div class='ftimg'> "+
						"		<a href='index.php?mc=Inicio&idProd="+id+"'> ";
						
						//Si contiene "http" es un link ! no es una img del servidor
						if(getPrimeraImg(id).indexOf('http://') != -1) //verdadero si NO contiene http
							imagen=getPrimeraImg(id);
						else
							imagen=getPrimeraImg(id).substring(getPrimeraImg(id).indexOf('http://'),getPrimeraImg(id).length);
						
		producto+=		"          <img id='iprod"+id+"' class='link' src='"+imagen+"' alt='img1' width='204' height='128'> "+
						"        </a> "+
						"	</div> "+
						"	<header> "+
						"		<a href='index.php?mc=Inicio&idProd="+id+"'><h3 id='iprod"+id+"' class='link'>"+nombre+"</h3></a>"+
						"	</header> "+
						"	<p class='posttext pComunDesc'>"+descripcion+"</p>"+
						"	<footer class='footer2'>"+
						"		<table class='tablaProd sinBorde'>"+
						"			<tr>"+
						"				<td class='colMarca'>"+
						"					<span class='comments' title='Marca'>"+marca+"</span>"+
						"				</td>"+
						"				<td>"+
						"					<span class='comments visitas' title='Numero de visitas'>"+nrovis+"</span>"+
						"				</td>"+
						"				<td>"+
						"					<span class='comments precio' title='Precio'>"+precio+"</span>"+
						"				</td>"+
						"				<td>"+
						"					<span class='comments' id='icat"+catId+"' title='Categoria'><a class='categoria' href='http://localhost:8080/IAW-Proy3/index.php?mc=Categorías&idCat="+catId+"'>"+catNombre+"</a></span>"+
						"				</td>"+
						"			</tr>"+
						"		</table>"+
						"	</footer> "+
					" </article> ";
		$("#productos").append(producto);
	}	
	
	//Seleccionar los anchor que tienen una img adentro 
	//$("a:has(img)").slimbox();
	
	//$(".hiddenImg").hide();
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
		inic = parseInt(inic) + parseInt(limit);
		
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
				
		});
			
		
	});
}


//Carga el arreglo de imagenes
function cargarArregloImg(){
	
	//borro lo que tenia antes, nueva instancia
	pathImagenes= new Array();
	
	url = '_lib/pathImg.php';
	
	$.getJSON(url, function(data) {
	
		for (i=0;i<data.length;i++)
		{
			
			if(data[i]== undefined )
			{
				alert("Data[i] undefined para i="+i);	
			}
				var	idProd= data[i].id;
				var	arregloImg= data[i].img;
					
				pathImagenes[idProd]=arregloImg;
			
		}	
				
	});//end getJSON
		
}

//Devuelve la primera img de un producto (la que se muestra)
function getPrimeraImg(idProd){
	return pathImagenes[idProd][0][0];
}

//Devuelve todas las img disponibles del producto junto a su descripcion (las que mostrara slimbox)
function getAllImg(idProd){
	return pathImagenes[idProd];
}


