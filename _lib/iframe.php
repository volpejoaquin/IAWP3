<?php

$_GET['iframe'] = 'true';
include 'productos.php';

if (!isset($_GET['search'])) {
	$_GET['search'] = "Ultimo agregado";
}

$iframe =  "<link href='../iframe/iframe.css' rel='stylesheet'  type='text/css' media='screen' />".
			"<div id='bodywrap'>".
			"	<div class='titulo'>Productos</div>".
			"	<div class='filtradoPor'>Filtrado por:<span class='filtro'>". $_GET['search']."</span></div>".
			"		<ul>";

$productos = $response["productos"];
foreach ($productos as $prod) {
	$id = $prod["id"];
	$nombre = $prod["nombre"];
	$descripcion = $prod["descripcion"];
	$precio =  $prod["precio"];
	$marca =  $prod["marca"];
	$catId =  $prod["catid"];
	$catNombre =  $prod["nombrecat"];
	$nrovis =  $prod["nro_visitas"];
		
	$iframe .=		"<div class='articulo'>".
						"<article class='post'> ".
							"	<header> ".
							"		<a target='_blank' href='http://".$_SERVER['HTTP_HOST']."/IAW-Proy3/index.php?mc=Inicio&idProd=".$id."'><h3 id='iprod".$id."' class='link'>".$nombre."</h3></a>".
							"	</header> ".
							"	<p class='posttext pComunDesc'>".$descripcion."</p>".
							"	<footer class='footer2'>".
							"		<table class='tablaProd sinBorde'>".
							"			<tr>".
							"				<td class='colMarca'>".
							"					<span class='comments' title='Marca'>".$marca."</span>".
							"				</td>".
							"				<td>".
							"					<span class='comments visitas' title='Numero de visitas'>".$nrovis."</span>".
							"				</td>".
							"				<td>".
							"					<span class='comments precio' title='Precio'>".$precio."</span>".
							"				</td>".
							"				<td>".
							"					<span class='comments' id='icat".$catId."' title='Categoria'><a target='_blank' class='categoria' href='http://localhost:8080/IAW-Proy3/index.php?mc=Categorías&idCat=".$catId."'>".$catNombre."</a></span>".
							"				</td>".
							"			</tr>".
							"		</table>".
							"	</footer> ".
						" </article> ".
					"</div>";
}
$iframe .=	"		</ul>".
			"</div>";

echo $iframe;


?>