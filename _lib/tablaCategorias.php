<?php

try{
try {
    $db = new PDO("sqlite:../datos/iawp3.sqlite");
} catch (Exception $e) {
    die($e);
}


$categorias = $db->query("SELECT id, nombre, descripcion as desc, nro_likes  
						 FROM categorias");

$response=array();
$i=0;
 foreach($categorias as $row)
    {
      $response[$i++]= array("id"=>$row['id'],
      						 "nombre"=>$row['nombre'],
      						 "desc"=>$row['desc'],
      						 "nro_likes"=>$row['nro_likes'] );
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