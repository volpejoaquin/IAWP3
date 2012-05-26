<?php
try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

if(isset($_GET['limit']))
{
	$limit=$_GET['limit'];
}
else
{
	$limit="5";
}

if(isset($_GET['inic']))
{
	$inic=$_GET['inic'];
}
else
{
	$inic="0";
}

if(isset($_GET['ord']))
{
	if ($_GET['ord'] == "ult") {
		$ord='id';
	} 
	if ($_GET['ord'] == "masV") {
		$ord='nro_likes';
	} 	
}
else
{
	$ord='id';
}

//Consulta
if(isset($_GET['id']))
{
	$categoria = $_GET['id'];
	$prods = $db->prepare("SELECT * FROM productos  WHERE id_categoria='".$categoria."' ORDER BY ".$ord." DESC LIMIT ".$inic.",".$limit.";");
}
else {
	if(isset($_GET['search']))
	{
		$search = $_GET['search'];
		//VER BD TAGS !!
		$prods = $db->prepare("SELECT * FROM productos WHERE nombre LIKE '%".$search."%' ORDER BY ".$ord." DESC LIMIT ".$inic.",".$limit.";");
	}
	else {
		$prods = $db->prepare("SELECT * FROM productos ORDER BY ".$ord." DESC LIMIT ".$inic.",".$limit.";");
	}
}
	$prods->execute();

	$allProds=array();
	$i=0;
	$destacado= null;
	$masproductos=true;
	$visitasMax = 0;
	foreach ($prods as $prod){
		
		$cats = $db->prepare("SELECT * FROM categorias WHERE id='".$prod["id_categoria"]."';");
		$cats->execute();

		foreach ($cats as $cat){
			// Indice => Una categoria completa
			$allProds[$i++]=     array("id"=>$prod["id"],
										"nombre"=>$prod["nombre"],
										"descripcion"=>$prod["descripcion"],
										"precio"=>$prod["precio"],
										"nro_visitas"=>$prod["nro_likes"],
										"stock"=>$prod["stock"],
										"marca"=>$prod["marca"],
										"catid"=>$prod["id_categoria"],
										"nombrecat"=>$cat["nombre"]);								 
		}
	}
	
	//Obtener destacado
	$dest = $db->prepare("SELECT * FROM productos WHERE  nro_likes = (SELECT MAX(nro_likes) FROM productos) ;");
	$dest->execute();
	
	foreach($dest as $des) {
		$cats = $db->prepare("SELECT * FROM categorias WHERE id='".$prod["id_categoria"]."';");
		$cats->execute();
		//var_dump($des);
		foreach ($cats as $cat){
			$destacado =     array("id"=>$des["id"],
								"nombre"=>$des["nombre"],
								"descripcion"=>$des["descripcion"],
								"precio"=>$des["precio"],
								"nro_visitas"=>$des["nro_likes"],
								"stock"=>$des["stock"],
								"marca"=>$des["marca"],
								"catid"=>$des["id_categoria"],
								"nombrecat"=>$cat["nombre"]);						 
		}
		
		
	}
	//echo $des;
	
	//Verificar si hay mas elementos
	$inic = $inic + $limit;
	
	if(isset($_GET['id']))
	{
		$categoria = $_GET['id'];
		$cantidad = $db->prepare("SELECT * FROM productos where id_categoria='".$categoria."' LIMIT ".$inic.",".$limit.";");
	}
	else {
		$cantidad = $db->prepare("SELECT * FROM productos LIMIT ".$inic.",".$limit.";");
	}

	$cantidad->execute();
	$count = count($cantidad->fetchAll());


	if ($count == 0) {
		$masproductos = false;
	}

	$response= array("destacado"=>$destacado,"productos"=>$allProds,"masproductos"=>$masproductos);

	//echo $response;
	echo json_encode($response);
	flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>