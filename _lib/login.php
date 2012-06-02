<?php
try{
try {
    $db = new PDO('sqlite:../datos/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}
if(isset($_GET['user']))
{
	$usuario=$_GET['user'];
	if(isset($_GET['password']))
	{
		$password=$_GET['password'];
		
		if ($usuario == "" || $password == "") {
			$response= array("respuesta"=>false,"msj"=>"** Debe ingresar correctamente los campos");
		}
		else {
			
			$users = $db->prepare("SELECT * FROM usuarios WHERE usuario == '".$usuario."' AND password == '".$password."';");	
			$users->execute();
			
			$count = count($users->fetchAll());
			
			if ($count > 0) {
				session_start();
				$_SESSION["logueado"] = "true";
				$response= array("respuesta"=>true,"msj"=>"Login ok.");
			}
			else {
				$response= array("respuesta"=>false,"msj"=>"** Debe ingresar correctamente los campos");
			}
			
		}
	}
	else
	{
		$response= array("respuesta"=>false,"msj"=>"** Debe ingresar correctamente los campos");
	}
}
else
{
	$response= array("respuesta"=>false,"msj"=>"** Debe ingresar correctamente los campos");
	
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