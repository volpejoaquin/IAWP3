<?php

$idProd=$_POST['id'];

$dirPath="../productos/";
$prodDir="producto".$idProd;

$fullPath=$dirPath.$prodDir;

if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/png"))
&& ($_FILES["file"]["size"] < 512000))					//500kb de tamanio - esta en bytes.
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Error inesperado: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
//    echo "Upload: " . $_FILES["file"]["name"] . "<br />";
//    echo "Type: " . $_FILES["file"]["type"] . "<br />";
//    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
//    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";

    if (file_exists($fullPath . $_FILES["file"]["name"]))
      {
      echo $_FILES["file"]["name"] . " ya existe en el sistema. Especifique otro nombre para el archivo.";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      					$fullPath . $_FILES["file"]["name"]);
      echo "Exito."; // in: " . $fullPath . $_FILES["file"]["name"];
      }
    }
  }
else
  {
  echo "Tipo o tama&ntilde;o de archivo inv&aacute;lido";
  }
  
?>