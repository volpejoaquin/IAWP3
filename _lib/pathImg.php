<?php
try{

try {
    $db = new PDO("sqlite:../db/iawp3.sqlite");
} catch (Exception $e) {
    die($e);
}


$productos = $db->query("SELECT id,nombre from productos");

$response=array();
$i=0;
 foreach($productos as $row)
    {
    	$j=0;
    	$aux=array();
		$id=$row['id'];
		$nombre=$row['nombre'];
		
		$directory = "../productos/producto".$id."/";
		
		//Si hay archivos (de cualquier tipo)
		if (glob($directory . "*.*") != false)
		{
			//Los cuento
		 $filecount = count(glob($directory . "*.*"));
		 //Asumo que son imagenes
		 $images = glob($directory . "*.*");

		 foreach ($images as $image) {
		     $path=substr($image, 3,strlen($image)-1);
			 $aux[$j++]=array($path,$nombre.": imagen ".$j);
		 } //arreglo con los paths de las imagenes
		
		}
		else
		{//no tiene imagenes o no existe el directorio...
		
		//if (file_exists($directory))
			$aux[$j++]=array("productos/noimage.png",$nombre);
		
		//Si no existe el directorio o no tiene imagenes, se le asigna el "img not available".
		 
		}
		$response[$i++]=array("id"=> $id, "img"=>$aux);
	}

$resp=json_encode($response);
echo $resp;

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

?>