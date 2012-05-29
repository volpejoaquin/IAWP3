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
			$("#ult").attr("href","index.php?mc=Categorías&idCat="+parametros["idCat"]+"&ord=ult");
			$("#masV").attr("href","index.php?mc=Categorías&idCat="+parametros["idCat"]+"&ord=masV");
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
									 <a class='link' href='index.php?mc=Categorías&idCat="+id+"&ord=ult'><h3 class='verCategoria'>"+nombre+"</h3></a>\
								 </header>\
								 <p>"+descripcion+"</p>\
								 <footer>\
									<span class='comments producto' title='Cantidad de productos'>"+ cantProd+"</span>\
									<span id='visitas"+id+"' class='author visitas' title='Numero de visitas'>"+ nrovis+"</span>\
								 </footer>\
							</article>";
							
				$("#categorias").append(categoria);
			}				
		});
		
		
		if (parametros["idCat"] != undefined) {
			if (parametros["ord"] != undefined) {
				verCategoria(parametros["idCat"],parametros["ord"]);
				url = '_lib/productos.php?limit='+limit+'&inic='+inic+'&ord='+parametros["ord"];
				$("#"+parametros["ord"]).addClass("current");
			} 
			else {
				$("#ult").addClass("current");
				verCategoria(parametros["idCat"]);
			}
			
		} 		
		
	});
});

function verCategoria(id,ord) {
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
		
		if (ord != undefined) {
			mostrarProductos(id,ord);
		} else {
			mostrarProductos(id);
		}
		
	} else {
		verCategorias();		
	}
}



