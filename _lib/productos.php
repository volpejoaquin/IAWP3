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

//Consulta
if(isset($_GET['id']))
{
	$categoria = $_GET['id'];
	$prods = $db->prepare("SELECT * FROM productos where id_categoria='".$categoria."' LIMIT ".$inic.",".$limit.";");
}
else {
	$prods = $db->prepare("SELECT * FROM productos LIMIT ".$inic.",".$limit.";");
}
	$prods->execute();

	$allProds=array();
	$i=0;
	$destacado= null;
	$masproductos=true;
	foreach ($prods as $prod){
		
		$cats = $db->prepare("SELECT * FROM categorias where id_categoria='".$prod["id_categoria"]."';");
		//$cats->execute();

		//foreach ($cats as $cat){
			// Indice => Una categoria completa
			$allProds[$i++]=     array("id"=>$prod["id"],
										"nombre"=>$prod["nombre"],
										"descripcion"=>$prod["descripcion"],
										"precio"=>$prod["precio"],
										"stock"=>$prod["stock"],
										"marca"=>$prod["marca"],
										"catid"=>$prod["id_categoria"]);
										//"nombrecat"=>$cats["nombre"]);								 
		//}
		
		
		if ($i == 1) 
		{
			$destacado=$allProds[0]; //El primer producto es el destacado
		}
	}
  
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