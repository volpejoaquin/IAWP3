<?php
try{
try {
    $db = new PDO('sqlite:../datos/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

//Consulta
if(isset($_GET['id']))
{
	$idProd = $_GET['id'];
	
	$vist = $db->prepare("UPDATE productos SET nro_likes = nro_likes + 1 WHERE id='".$idProd."';");
	$vist->execute();
	
	$prods = $db->prepare("SELECT * FROM productos where id='".$idProd."' ;");
}
else {
	$vist = $db->prepare("UPDATE productos SET nro_likes = nro_likes + 1 WHERE id='0';");
	$vist->execute();
	
	$prods = $db->prepare("SELECT * FROM productos where id='1' ;");
}

$prods->execute();

	$allProds=array();
	$i=0;
	$idProd;
	foreach ($prods as $prod){
		
		$cats = $db->prepare("SELECT * FROM categorias WHERE id='".$prod["id_categoria"]."';");
		$cats->execute();
		$idProd = $prod["id"];
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

  //Sumo una visita al producto
  
  
  $response= array("productos"=>$allProds);
  
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