<?php

$id=$_POST['id'];
/*
	echo $_SERVER['DOCUMENT_ROOT'];
	echo "<br/>";
	echo $_SERVER['SCRIPT_FILENAME'];
	echo "<br/>";
	*/
	
	//Busca el nombre de la carpeta anterior a /_lib ... se asume que esa sera la raiz del proyecto
	$homeProject= $_SERVER['SCRIPT_FILENAME'];
	$libDirIndex = strrpos($homeProject,"_lib");
	$homeProject= substr($_SERVER['SCRIPT_FILENAME'], 0 ,$libDirIndex-1);
	
// Define a destination
////$homeProject=$_SERVER['DOCUMENT_ROOT'];
//$targetFolder = '/IAW-P3/productos/producto'.$id; // Relative to the webserver document root --- No reconoce el alias !
	$targetFolder = '/productos/producto'.$id; // Relativo a la carpeta del proyecto, el alias donde estoy!!
	
if (!empty($_FILES)) {
	$tempFile = str_replace(' ', '_', $_FILES['Filedata']['tmp_name']);
	$targetPath = $homeProject . $targetFolder;
	$targetFile = rtrim($targetPath,'/') . '/' . str_replace(' ', '_', $_FILES['Filedata']['name']);
	
	// Validate the file type
	$fileTypes = array('jpg','jpeg','gif','png'); // File extensions
	$fileParts = pathinfo($_FILES['Filedata']['name']);
	
	if (in_array($fileParts['extension'],$fileTypes)) {
		
		if(!file_exists($targetPath))
		    mkdir($targetPath,'0777');
		
		move_uploaded_file($tempFile,$targetFile);
		echo "1".$targetFile;
	} else {
		echo 'Tipo de archivo inv&aacute;lido. Se aceptan jpg, jpeg, gif, png.';
	}
}
?>