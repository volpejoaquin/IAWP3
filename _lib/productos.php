
<?php


try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}


$limit="5";
$inic="0";


if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$prods = $db->prepare('SELECT * FROM productos WHERE id_categoria=='.$id.' LIMIT '.$inic.','.$limit.';');
} else {
	$prods = $db->prepare('SELECT * FROM productos LIMIT '.$inic.','.$limit.';');
}

//Consulta

$prods->execute();
	
	
	$allProds=array();
	$i=0;
	foreach ($prods as $prod){
		
		// Indice => Una categoria completa
		$allProds[$i++]= array("id"=>$prod["id"],
								 "nombre"=>$prod["nombre"],
								 "descripcion"=>$prod["descripcion"],
								 "marca"=>"JS", // VER MARCA PRODUCTOS
								 "cantComent"=>"2"); //VER CANTIDAD DE COMENTARIOS
	}
								 
// return a json array
  $resp = array("destacado"=>$allProds[0],"productos"=>$allProds,"masproductos"=>"true");
  echo json_encode($resp);
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
