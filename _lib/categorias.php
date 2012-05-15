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
		
		$nroProds=$db->prepare('SELECT COUNT() FROM productos WHERE id_categoria='.$cat[id].';');
		$nroProds->execute();
		// Indice => Una categoria completa
		$allCats[$i++]=     array("id"=>$cat["id"],
								 "nombre"=>$cat["nombre"],
								 "descripcion"=>$cat["descripcion"],
								 "cantProd"=>$nroProds);
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


/*
$cat1 = array("id"=>"0", "nombre"=>"Accesorios", "descripcion"=>"Todo tipo de accesorios para el interior de tu auto de carreras. Extractores de volante, redes de puerta	 espejos interiores y exteriores, teclas de contacto para instalacion electrica, etc.", "cantProd"=>"5");
$cat2 = array("id"=>"1", "nombre"=>"Cintos" , "descripcion"=>"Todo tipo de accesorios para el interior de tu auto de carreras.", "cantProd"=>"5");
$miArray = array($cat1, $cat2);
echo json_encode($miArray);*/
?>