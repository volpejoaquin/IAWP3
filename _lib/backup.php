<?php
try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

	session_start();
	if (isset($_SESSION['logueado'])) {	
		if(isset($_GET['acc'])) {
			$acc = $_GET['acc'];
			if ($acc == "backUp") {
			
				
			}
		}
		
		$response[0] =  array("id"=>"0",
							  "nombre"=>"Backup-17-05-2010.rar");
		$response[1] =  array("id"=>"1",
							  "nombre"=>"Backup-17-04-2010.rar");
		$response[2] =  array("id"=>"2",
							  "nombre"=>"Backup-17-03-2010.rar");
		
		echo json_encode($response);
	}
	else {
		echo "<h3>Usted no tiene permisos para esta pagina</h3>";
	}
	flush();
}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>