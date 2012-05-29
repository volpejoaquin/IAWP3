<?php
try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

	session_start();
	if (isset($_SESSION['logueado'])) {	
		if(isset($_GET['ver_destacado']) && isset($_GET['limit']))
		{
			$confs1 = $db->prepare("UPDATE configuracion SET ver_destacado='".$_GET['ver_destacado']."';");
			$confs1->execute();
			$confs2 = $db->prepare("UPDATE configuracion SET num_limit='".$_GET['limit']."';");
			$confs2->execute();
		}
	}

	$confs = $db->prepare("SELECT * FROM configuracion  WHERE id='0';");
	$confs->execute();
	
	$i = 0;
	foreach ($confs as $conf){
		$response[$i]=    array("limit"=>$conf["num_limit"],
								"destacado"=>$conf["ver_destacado"],
								"orden"=>$conf["ord"]);								 
	}
	
	//$response= array("limit"=>"5","destacado"=>"true");

	//echo $response;
	echo json_encode($response[0]);
	flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

?>