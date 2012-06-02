<?php

$lastid=0;

try{
try {
    $db = new PDO('sqlite:../datos/iawp3.sqlite');
} catch (Exception $e) {
	echo($e);
    die($e);
}
		
		$tagsString="";
		//Asocio las tags con el producto
		if(isset($_POST['tags']))
		{
		//$tagsArray= explode(",", trim($_POST['tags']));
		
		
		$tagsString=$_POST['tags'];
				
		}

		//Se usa una categoria existente
		$qry = $db->prepare(
		    'INSERT INTO productos VALUES (null,?, ?, ?,0,?,?,?,?)');
		$qry->execute(array($_POST['nombre'],$_POST['descripcion'],$_POST['precio'],$_POST['stock'],$_POST['list'],$_POST['marca'],$_POST['tags']));
		
		//Obtengo el id del producto recien insertado
				$qry=$db->prepare( "SELECT last_insert_rowid()");
				$qry->execute();
				$lastid="";
				foreach($qry as $id)
					{
						$lastid=$id['last_insert_rowid()'];
					}
		
	

//echo $response;
  echo "<p>¡Se agreg&oacute; '".$_POST['nombre']."' satisfactoriamente!</p>";
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

//Agrego la carpeta de img del producto
$dirPath="../productos/";
$newDir="producto".$lastid;

$fullPath=$dirPath.$newDir;

if(!file_exists($fullPath))
{
	$result=mkdir($fullPath,"0777");	//permisos de write globales
}




?>