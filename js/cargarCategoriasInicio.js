var categorias = true;

$(document).ready(function() {
	$.getJSON('_lib/configuracion.php', function(data) {
		limit = data.limit;
		verdestacado = data.destacado;
		
		if (verdestacado == "true") {
			$("#featured").show();
		} else {
			$("#featured").hide();
		}
		
		parametros = parametrosUrl();
		if (parametros["idCat"] != undefined) {
			var url = '_lib/categorias.php?id='+parametros["idCat"];
		} else {
			var url = '_lib/categorias.php';
		}
		
		$.getJSON(url, function(data) {

			for (i=0; i<data.length;i++) {
				id = data[i].id;
				nombre = data[i].nombre;
				descripcion = data[i].descripcion;
				cantProd = data[i].cantProd;
				nrovis = data[i].nro_visitas;
				
				categoria = "<article id='cat"+id+"' class='post'>\
								<header>\
									 <a class='link' href='index.php?mc=Categorías&idCat="+id+"'><h3>"+nombre+"</h3></a>\
								 </header>\
								 <p>"+descripcion+"</p>\
								 <footer>\
								 <span class='author'>Productos: "+ cantProd+"</span>\
								 <span id='visitas"+id+"' class='author'>Visitas: "+ nrovis+"</span>\
								 <span id='verCat"+id+"' class='permalink link'><a href='index.php?mc=Categorías&idCat="+id+"'>Ver Categoria</a></span>\
								 </footer>\
							</article>";
							
				$("#categorias").append(categoria);
			}				
		});
		
		
		if (parametros["idCat"] != undefined) {
			verCategoria(parametros["idCat"]);
		} 		
		
	});
});

function verCategoria(id) {
	if (categorias == true) {
		
		var idCat = "cat"+id;
		var idverCat = "verCat"+id;
		var idvisCat = "visitas"+id;

		$("[id!='"+idCat+"'][id!='categorias'][id^='cat']").hide("slow");
		$("[id='"+idverCat+"']").hide();
		
		var visitas = $("[id='"+idvisCat+"']").html();
		
		$("[id='"+idvisCat+"']").html(visitas);
		categorias = false;
		
		$("#listaproductos").show("slow");
		$("#productos").html("");
		
		mostrarProductos(id);
		
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



