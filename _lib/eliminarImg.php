<?php

try{
$idProd=$_POST['id'];
$imgPath=$_POST['path'];

$dirPath="../productos/";
$elimFile="producto".$idProd."/".$imgPath;

$fullPath=$dirPath.$elimFile;
echo $fullPath."\n";

if(file_exists($fullPath))
{
	if(unlink($fullPath))
		echo "1";
	else 
	{
		echo "Error al tratar de eliminar la imagen.";
	}
}
else {
	echo "No existe el archivo ".$fullPath;
}

//echo "Exito";
//flush();

}
catch(Exception $e)
{
	echo $e->getMessage();
}


function deleteDir($dir) {
   $iterator = new RecursiveDirectoryIterator($dir);
   foreach (new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::CHILD_FIRST) as $file) 
   {
      if ($file->isDir()) {
         rmdir($file->getPathname());
      } else {
         unlink($file->getPathname());
      }
   }
   rmdir($dir);
}



?>