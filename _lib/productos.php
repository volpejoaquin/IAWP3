<?php

if(isset($_GET['categoria']))
{
	$categoria = $_GET['indice'];
}
else {
	$categoria = 1;
}

try{
try {
    $db = new PDO('sqlite:../db/iawp3.sqlite');
} catch (Exception $e) {
    die($e);
}


$limit="100";
$inic="0";

//Consulta
$prods = $db->prepare("SELECT * FROM productos where id_categoria='".$categoria."' LIMIT ".$inic.",".$limit.";");
$prods->execute();
	
	
	$allProds=array();
	$i=0;
	foreach ($prods as $prod){
		
		$nroComents=$db->prepare('SELECT COUNT() FROM lista_comentarios WHERE id_producto='.$prod["id"].';');
		$nroComents->execute();
		
		foreach ($nroComents as $nroComent){
			// Indice => Una categoria completa
			$allProds[$i++]=     array("id"=>$prod["id"],
									 "nombre"=>$prod["nombre"],
									 "descripcion"=>$prod["descripcion"],
									 "precio"=>$prod["precio"],
									 "nro_likes"=>$prod["nro_likes"],
									 "stock"=>$prod["stock"],
									 "marca"=>$prod["marca"],
									 "cantComent"=>$nroComent[0]);
			
			if($i==1)
			{
				$destacado=$allProds[0]; //El primer producto es el destacado
			}						 
									 
		}
	}
								 
// return a json array

  $response= array("destacado"=>$destacado,"productos"=>$allProds,"masProductos"=>"false");

  echo $response;
  echo json_encode($response);
  flush();

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

//Cierro la conex a la bd
$db=null;

/*
$cat1 = array("id"=>"0", "nombre"=>"Resorte de valvulas", "descripcion"=>"Resorte de valvulas de aluminio.", "marca"=>"MPI", "cantComent"=>"21");
$cat2 = array("id"=>"1", "nombre"=>"Cinturones de 10 puntas", "descripcion"=>"Cintasdasdasddad de 5 puntas con enganche de aluminio.", "marca"=>"PS", "cantComent"=>"2");
$cat3 = array("id"=>"2", "nombre"=>"Botitas", "descripcion"=>"Cintasdasdasddad de 5 puntas con enganche de aluminio.", "marca"=>"PS", "cantComent"=>"2");
$miArray = array("destacado"=>$cat1, $cat2, $cat3);

//Mandar los 5 ultimos
$miArray = array("destacado"=> $cat1,"productos"=>"todosLosProductos","masProductos"=> "false");
echo json_encode($miArray);
 */
 
?>