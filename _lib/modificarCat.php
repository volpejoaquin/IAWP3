<?php

try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

	//Modifico la categoria
	$qry = $db->prepare(
    "UPDATE categorias SET nombre=?, descripcion=?, nro_likes=? WHERE id=".$_POST['id']."");
	$qry->execute(array($_POST['name'],$_POST['desc'],$_POST['nro_likes']));
	
	//Las tags??...

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