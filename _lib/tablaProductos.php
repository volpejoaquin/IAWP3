<?php

try{
try {
    $db = new PDO("sqlite:../db/iawp3.sqlite");
} catch (Exception $e) {
    die($e);
}


$productos = $db->query("SELECT p.id as id,p.nombre as nombre,p.descripcion as desc,p.precio as precio,p.stock as stock ,c.nombre as cat,p.marca as marca  
						 FROM productos p, categorias c
						 WHERE p.id_categoria=c.id");

$response=array();
$i=0;
 foreach($productos as $row)
    {
      $response[$i++]= array("id"=>$row['id'],
      						 "nombre"=>$row['nombre'],
      						 "desc"=>$row['desc'],
      						 "precio"=>$row['precio'],
      						 "stock"=>$row['stock'],
      						 "cat"=>$row['cat'],
      						 "marca"=>$row['marca'] );
    }
  //echo $response;
  echo json_encode($response);
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>