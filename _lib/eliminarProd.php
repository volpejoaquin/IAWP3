<?php

try{
try {
    $db = new PDO('sqlite:../datos/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}
	//Elimino el producto
	$qry = $db->prepare(
    "DELETE FROM productos WHERE id=?");
	$qry->execute(array($_POST['id']));

	//Borro la carpeta de imagenes asociadas al producto
	include 'borrarDir.php';
	
	
//echo $response;
  echo "1";
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>