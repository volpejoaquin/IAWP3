<?php
try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

$nombres = $db->query("SELECT nombre FROM categorias");

$response=array();
$i=0;
 foreach($nombres as $row)
    {
      $response[$i++]= $row['nombre'];
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