<?php
try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
	echo($e);
    die($e);
}

		//Se usa una categoria existente
		$qry = $db->prepare(
		    'INSERT INTO urls VALUES (?,?)');
		$qry->execute(array($_POST['id'],$_POST['url']));

		
		
echo "<p>¡Se agreg&oacute; el URL satisfactoriamente!</p>";
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>