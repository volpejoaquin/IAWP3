<?php

try{
try {
    $db = new PDO('sqlite:../datos/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

	//Obtengo la categoria
	$qry = $db->prepare(
    'SELECT id FROM categorias WHERE nombre=?');
	$qry->execute(array($_POST['categoria']));
	
	foreach($qry as $row)
	{
		$idcat= $row['id'];
	}
	
	//Modifico el producto
	$qry = $db->prepare(
    "UPDATE productos SET nombre=?, descripcion=?, precio=?,stock=?,id_categoria=".$idcat.",marca=? WHERE id=".$_POST['id']."");
	$qry->execute(array($_POST['name'],$_POST['desc'],$_POST['precio'],$_POST['stock'],$_POST['marca']));
	
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