<?php

require_once('pclzip.lib.php');
  

	session_start();
	if (isset($_SESSION['logueado'])) {	
		$response="";
		if(isset($_GET['acc'])) {
			$acc = $_GET['acc'];
			if ($acc == "backUp") {
				
			
			$homeProject= $_SERVER['SCRIPT_FILENAME'];
			$libDirIndex = strrpos($homeProject,"_lib");

			$homeProjectFolder=substr($_SERVER['SCRIPT_FILENAME'], 0 ,$libDirIndex-1);
		
			$destinyFolder=$homeProjectFolder. DIRECTORY_SEPARATOR . "backups".DIRECTORY_SEPARATOR;	//ADENTRO DE LA CARPETA "BACKUPS" DEL PROYECTO
		//	$destinyFolder=substr($homeProjectFolder, 0 , lastIndexOf($homeProjectFolder,"/")+1);  //CARPETA AL LADO DEL PROYECTO PPAL
			
			 $nombreDelZip="Backup_".date("d-m-Y_H-i-s").".zip";
			 $archive = new PclZip($nombreDelZip);
			   $v_dir = "../";				//$homeProjectFolder;
			   $v_remove = $v_dir;
			   
			   //Estas 3 lineas son para que funcione en Windows, por el C:\
			   if (substr($v_dir, 1,1) == ':') {
			     $v_remove = substr($v_dir, 2);
			   }
			   //----
			   
			   $v_list = $archive->create($v_dir, PCLZIP_OPT_REMOVE_PATH, $v_remove);
			   if ($v_list == 0) {
			     die("Error : ".$archive->errorInfo(true));
			   }
			   
			   $fileZ = $homeProjectFolder.'/_lib/'.$nombreDelZip;
			   $newFile = $homeProjectFolder.'/backups/'.$nombreDelZip;
			   
			 copy($fileZ,$newFile); 
 			 unlink($fileZ);
			   
			/*
			echo $_SERVER['SCRIPT_FILENAME'];
			echo " HOMEPROJECTFOLDER = ".$homeProjectFolder;
			echo "\n";
			echo " V_DIR = ".$v_dir;
			echo "\n";
			echo " V_REMOVE = ".$v_remove;
			*/
			
			//DEVOLVER TODOS LOS BACKUPS
			$directory = $homeProjectFolder."/backups/";
			$i=0;
			//Si hay archivos (de cualquier tipo)
			if (glob($directory . "*.*") != false)
			{
				//Los cuento
			 $filecount = count(glob($directory . "*.*"));
			 //Asumo que son imagenes
			 $archives = glob($directory . "*.*");
			 
			 foreach ($archives as $archive) {
				 $path=$archive;
				 $response[$i++]=$path;
			 } //arreglo con los paths de las imagenes

			}
			
			}
		}
		
		
		echo json_encode($response);
	}
	else {
		echo "<h3>Usted no tiene permisos para esta pagina</h3>";
	}
	flush();

	
	
	
	
	
	function Zip($source, $destination)
{
    if (extension_loaded('zip') === true)
    {
        if (file_exists($source) === true)
        {
            $zip = new ZipArchive();

			if(!file_exists($destination))
				mkdir($destination, '0777');
			
            if ($zip->open($destination, ZIPARCHIVE::CREATE) === true)
            {
                $source = realpath($source);

                if (is_dir($source) === true)
                {
                    $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source), RecursiveIteratorIterator::SELF_FIRST);

                    foreach ($files as $file)
                    {
                        $file = realpath($file);

                        if (is_dir($file) === true)
                        {
                            $zip->addEmptyDir(str_replace($source . '/', '', $file . '/'));
                        }

                        else if (is_file($file) === true)
                        {
                            $zip->addFromString(str_replace($source . '/', '', $file), file_get_contents($file));
                        }
                    }
                }

                else if (is_file($source) === true)
                {
                    $zip->addFromString(basename($source), file_get_contents($source));
                }
            }

            return $zip->close();
        }
    }

    return false;
}

function lastIndexOf($string,$item){  
    $index=strpos(strrev($string),strrev($item));  
    if ($index){  
        $index=strlen($string)-strlen($item)-$index;  
        return $index;  
    }  
        else  
        return -1;  
}

?>