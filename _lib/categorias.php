<?php


try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}


$limit="100";
$inic="0";

//Consulta
$cats = $db->prepare('SELECT * FROM categorias LIMIT '.$inic.','.$limit.';');
$cats->execute();
	
	
	$allCats=array();
	$i=0;
	foreach ($cats as $cat){

		$nroProds=$db->prepare('SELECT COUNT() FROM productos WHERE id_categoria='.$cat["id"].';');
		$nroProds->execute();

		foreach ($nroProds as $nroProd){
			// Indice => Una categoria completa
			$allCats[$i++]=     array("id"=>$cat["id"],
									 "nombre"=>$cat["nombre"],
									 "descripcion"=>$cat["descripcion"],
									 "cantProd"=>$nroProd[0]);
		}
	}
								 
// return a json array
  echo json_encode($allCats);
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>
