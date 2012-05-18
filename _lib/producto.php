<?php
try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

//Consulta
if(isset($_GET['id']))
{
	$idProd = $_GET['id'];
	$prods = $db->prepare("SELECT * FROM productos where id='".$idProd."' ;");
}
else {
	$prods = $db->prepare("SELECT * FROM productos where id='1' ;");
}

$prods->execute();

	$allProds=array();
	$i=0;
	foreach ($prods as $prod){
		
		$nroComents=$db->prepare('SELECT COUNT() FROM lista_comentarios WHERE id_producto='.$prod["id"].';');
		$nroComents->execute();
		
		foreach ($nroComents as $nroComent){
			// Indice => Una categoria completa
			$allProds[$i++]=     array("id"=>$prod["id"],
										"nombre"=>$prod["nombre"],
										"descripcion"=>$prod["descripcion"],
										"precio"=>$prod["precio"],
										"nro_likes"=>$prod["nro_likes"],
										"stock"=>$prod["stock"],
										"marca"=>$prod["marca"],
										"cantComent"=>$nroComent[0]);									 
		}

	}
 
  $response= array("productos"=>$allProds);

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