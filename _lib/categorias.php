<?php
$cat1 = array("id"=>"0", "nombre"=>"Accesorios", "descripcion"=>"Todo tipo de accesorios para el interior de tu auto de carreras. Extractores de volante, redes de puerta	 espejos interiores y exteriores, teclas de contacto para instalacion electrica, etc.", "cantProd"=>"5");
$cat2 = array("id"=>"1", "nombre"=>"Cintos" , "descripcion"=>"Todo tipo de accesorios para el interior de tu auto de carreras.", "cantProd"=>"5");
$miArray = array($cat1, $cat2);
echo json_encode($miArray);
?>