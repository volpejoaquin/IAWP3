<?php
try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}

	$confs = $db->prepare("SELECT * FROM configuracion  WHERE id='0';");
	$confs->execute();
	
	$i = 0;
	foreach ($confs as $conf){
		$response[$i]=    array("limit"=>$conf["num_limit"],
									"destacado"=>$conf["ver_destacado"]);								 
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