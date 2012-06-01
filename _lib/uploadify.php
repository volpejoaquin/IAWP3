<?php
/*
Uploadify
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
$id=$_POST['id'];
/*
	echo $_SERVER['DOCUMENT_ROOT'];
	echo "<br/>";
	echo $_SERVER['SCRIPT_FILENAME'];
	echo "<br/>";
	*/
	$homeProject= $_SERVER['SCRIPT_FILENAME'];
	$libDirIndex = strrpos($homeProject,"_lib");
	$homeProject= substr($_SERVER['SCRIPT_FILENAME'], 0 ,$libDirIndex-1);
	
	//echo "HomePROJECT>>".$homeProject;
	//$homeProject=$_SERVER['DOCUMENT_ROOT'];
	
// Define a destination
//$targetFolder = '/IAW-P3/productos/producto'.$id; // Relative to the root
	$targetFolder = '/productos/producto'.$id; // Relativo a la carpeta del proyecto donde estoy!!
	
if (!empty($_FILES)) {
	$tempFile = $_FILES['Filedata']['tmp_name'];
	$targetPath = $homeProject . $targetFolder;
	$targetFile = rtrim($targetPath,'/') . '/' . $_FILES['Filedata']['name'];
	
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