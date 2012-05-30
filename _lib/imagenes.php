<?php
try{

$id=$_GET['id'];

$directory = "../productos/producto".$id."/";
$response=array();
$i=0;

//Si hay archivos (de cualquier tipo)
if (glob($directory . "*.*") != false)
{
	//Los cuento
 $filecount = count(glob($directory . "*.*"));
 //Asumo que son imagenes
 $images = glob($directory . "*.*");
 
 foreach ($images as $image) {
     $path=substr($image, 3,strlen($image)-1);
	 $response[$i++]=array($path);
 } //arreglo con los paths de las imagenes

}
else
{//no tiene imagenes o no existe el directorio...

if (file_exists($directory))
	$response[$i]=array("productos/noimage.png");

//Si no existe el directorio, el arreglo response queda vacio.
 
}

$resp=json_encode($response);
echo $resp;

}
catch(Exception $e)
    {
    echo $e->getMessage();
    }

?>