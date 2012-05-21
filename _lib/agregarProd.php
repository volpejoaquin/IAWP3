<?php

try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

//Obtengo id de la categoria??
//$qry= $db-> prepare("SELECT id FROM categorias WHERE nombre='"+$_GET['categoria']+"'");


$qry = $db->prepare(
    'INSERT INTO productos VALUES (null,?, ?, ?,0,?,?,?)');
$qry->execute(array($_GET['nombre'],$_GET['descripcion'],$_GET['precio'],$_GET['stock'],$_GET['categoria'],$_GET['marca']));

//Asocio las tags con el producto
$tagsArray= explode(",", trim($_GET['tags']));


	
 
  //echo $response;
  echo "Todo bien !!!";
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>