<?php

try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

	foreach ($_POST as $key => $value) {
		echo ($key." => ".$value."\n");
	}
	

	//Obtengo la categoria
	$qry = $db->prepare(
    'SELECT id FROM categorias WHERE nombre=?');
	$qry->execute(array($_POST['categoria']));
	
	$idcat=1;
	
	//Modifico el producto
	$qry = $db->prepare(
    "UPDATE productos SET nombre=?, descripcion=?, precio=?,stock=?,id_categoria=".$idcat.",marca=?");
	$qry->execute(array($_POST['name'],$_POST['desc'],$_POST['precio'],$_POST['stock'],$_POST['marca']));
	
	//Las tags??...

//echo $response;
  echo "¡Se modific&oacute; '".$_POST['name']."' satisfactoriamente!";
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>