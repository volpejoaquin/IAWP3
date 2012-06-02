<?php
try{

try {
    $db = new PDO("sqlite:../datos/iawp3.sqlite");
} catch (Exception $e) {
    die($e);
}

$id=$_GET['id'];
$response=array();
$i=0;

$urls= $db->query("SELECT url from urls where id_producto=".$id);
		{
			foreach($urls as $urlRow)
			{
				$imagenURL=$urlRow['url'];
				$response[$i++]=$imagenURL;
			}
			
		}


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
	 $response[$i++]=$path;
 } //arreglo con los paths de las imagenes

}
else
{//no tiene imagenes o no existe el directorio...

if (file_exists($directory))
	$response[$i]="productos/noimage.png";

//Si no existe el directorio, el arreglo response queda vacio.
 
}

$resp=json_encode($response);
echo $resp;

}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

?>