<?php

try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
	echo($e);
    die($e);
}

//Si se creo una nueva categoria en vez de usarse una existente...
if(isset($_POST['nuevaCat']) && $_POST['nuevaCat']!="null")
{
	//Inserto la categoria
	$qry = $db->prepare(
    'INSERT INTO categorias VALUES (null,?,?)');
	var_dump($db);
	$qry->execute(array($_POST['nuevaCat'],$_POST['nuevaDesc']));
	
	//Obtengo el id de la categoria recien insertada
	$qry=$db->prepare( "SELECT last_insert_rowid()");
	$qry->execute();
	$lastid="";
	foreach($qry as $id)
		{
			$lastid=$id['last_insert_rowid()'];
		}
	
	//inserto el producto
	$qry = $db->prepare(
    'INSERT INTO productos VALUES (null,?, ?, ?,0,?,?,?)');
	$qry->execute(array($_POST['nombre'],$_POST['descripcion'],$_POST['precio'],$_POST['stock'],$lastid,$_POST['marca']));
	
	//Asocio las tags con el producto
	if(isset($_POST['tags']))
	{
		$tagsArray= explode(",", trim($_POST['tags']));
	
		//Obtengo el id del producto recien insertado
		$qry=$db->prepare( "SELECT last_insert_rowid()");
		$qry->execute();
		$lastid="";
		foreach($qry as $id)
			{
				$lastid=$id['last_insert_rowid()'];
			}
		
		//Inserto en la tabla de tags
		foreach ($tagsArray as $key => $value) {
			$qry = $db->prepare(
    		"INSERT INTO tags VALUES (?,?)");
			$qry->execute(array($lastid,$value));
		}
	}

	echo "Nueva categoria '".$_POST['nuevaCat']."' creada satisfactoriamente... <br/>";
}
else {
		//Se usa una categoria existente
		$qry = $db->prepare(
		    'INSERT INTO productos VALUES (null,?, ?, ?,0,?,?,?)');
		$qry->execute(array($_POST['nombre'],$_POST['descripcion'],$_POST['precio'],$_POST['stock'],$_POST['categoria'],$_POST['marca']));
		
		//Asocio las tags con el producto
		if(isset($_POST['tags']))
		{
		$tagsArray= explode(",", trim($_POST['tags']));
			
				//Obtengo el id del producto recien insertado
				$qry=$db->prepare( "SELECT last_insert_rowid()");
				$qry->execute();
				$lastid="";
				foreach($qry as $id)
					{
						$lastid=$id['last_insert_rowid()'];
					}
				
				//Inserto en la tabla de tags
				foreach ($tagsArray as $key => $value) {
					$qry = $db->prepare(
		    		"INSERT INTO tags VALUES (?,?)");
					$qry->execute(array($lastid,$value));
				}
		}
}


//echo $response;
  echo "¡Se agreg&oacute; '".$_POST['nombre']."' satisfactoriamente!";
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>