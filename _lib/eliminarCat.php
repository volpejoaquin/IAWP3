<?php

try{
try {
    $db = new PDO('sqlite:../datos/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}
	//Elimino el producto
	$qry = $db->prepare(
    "DELETE FROM categorias WHERE id=?");
	$qry->execute(array($_POST['id']));
	
//echo $response;
  echo "Exito";
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>