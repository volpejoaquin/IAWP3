<?php

try{
try {
    $db = new PDO('sqlite:./db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}


$limit="5";
$inic="0";

//Consulta
$prods = $db->prepare('SELECT * FROM productos LIMIT '.$inic.','.$limit.';');
$prods->execute();
	
	
	$allProducts=array();
	$i=0;
	foreach ($prods as $prod){
		// Indice => Un producto completo
		$allProducts[$i++]=     array("id"=>$prod["id"],
								 "nombre"=>$prod["nombre"],
								 "descripcion"=>$prod["descripcion"],
								 "precio"=>$prod["precio"],
								 "nro_likes"=>$prod["nro_likes"],
								 "stock"=>$prod["stock"],
								 "id_categoria"=>$prod["id_categoria"]);
	}
								 
// return a json array
  echo json_encode($allProducts);
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>