<?php

try {
    $db = new PDO('sqlite:./db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}


$limit="5";
$inic="0";
// simple select 
$prods = $db->prepare('SELECT * FROM productos LIMIT '.$inic.','.$limit.';');
$prods->execute();
	
	//$result = sqlite_query($db, "SELECT * from productos"); 

	// grab each row as an array 
	while ($prod=$prods-> fetchObject()){
		echo($prod->nombre.": ".$prod->descripcion."<br/>");
		//print_r($prod['nombre'].": ".$prod['descripcion']);
		//echo($prod['nombre'].": ".$prod['descripcion']);
			}





// return a json array
//  $response = array();
  
  
  
//  echo json_encode($response);
//  flush();

?>