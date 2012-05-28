<?php

try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
	echo($e);
    die($e);
}

		$qry = $db->prepare(
		    'INSERT INTO categorias VALUES (null,?, ?,0)');
		$qry->execute(array($_POST['nombre'],$_POST['descripcion']));
		
	
//echo $response;
  echo "<p>¡Se agreg&oacute; la categor&iacute;a '".$_POST['nombre']."' satisfactoriamente!</p>";
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>