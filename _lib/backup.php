<?php

	session_start();
	if (isset($_SESSION['logueado'])) {	
		$response = ""; 
		if(isset($_GET['acc'])) {			
			$acc = $_GET['acc'];
			if ($acc == "backUp") {
			
			
				$directorio="../";
				$filename="c:/wamp/www/backup.zip";


				$zip = new ZipArchive();  
				if ($zip->open($filename,  ZIPARCHIVE::CREATE | ZIPARCHIVE::OVERWRITE)!==TRUE) {
					exit("cannot open <$filename>\n");
				} 
				
				$zip->addFile($thisdir . "/too.php","/testfromfile.php");
				 
				echo "numficheros: " . $zip->numFiles . "\n";
				echo "estado:" . $zip->status . "\n";
				 
				

				 
				//Cerramos el archivo  
				$zip->close(); 
				
				//DEVOLVER TODOS LOS BACKUPS
				$directory = $directorio;

				//Si hay archivos (de cualquier tipo)
				if (glob($directory . "*.*") != false)
				{
					//Los cuento
				 $filecount = count(glob($directory . "*.*"));
				 //Asumo que son imagenes
				 $archives = glob($directory . "*.*");
				 $i=0;
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
			var_dump($zip);
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