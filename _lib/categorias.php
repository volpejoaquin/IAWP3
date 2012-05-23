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
if(isset($_GET['id']))
{
	$categoria = $_GET['id'];
	
	$vist = $db->prepare("UPDATE categorias SET nro_likes = nro_likes + 1 WHERE id='".$categoria."';");
	$vist->execute();
	
	$cats = $db->prepare("SELECT * FROM categorias WHERE id='".$categoria."' LIMIT ".$inic.",".$limit.";");
}
else {
	$cats = $db->prepare("SELECT * FROM categorias LIMIT ".$inic.",".$limit.";");
}
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
									 "nro_visitas"=>$cat["nro_likes"],
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
