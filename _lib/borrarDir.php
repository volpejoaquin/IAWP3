<?php

try{
$idProd=$_POST['id'];

$dirPath="../productos/";
$elimDir="producto".$idProd;

$fullPath=$dirPath.$elimDir;

if(file_exists($fullPath))
	deleteDir($fullPath);

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