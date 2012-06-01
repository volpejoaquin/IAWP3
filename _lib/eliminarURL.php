<?php
try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}
	//Elimino el producto
	$qry = $db->prepare(
    "DELETE FROM urls WHERE id_producto=? AND url=?");
	$qry->execute(array($_POST['id'],$_POST['path']));
	
	
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