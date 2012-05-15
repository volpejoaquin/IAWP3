<?php
$cat1 = array("id"=>"0", "nombre"=>"Resorte de valvulas", "descripcion"=>"Resorte de valvulas de aluminio.", "marca"=>"MPI", "cantComent"=>"21");
$cat2 = array("id"=>"1", "nombre"=>"Cinturones de 10 puntas", "descripcion"=>"Cintasdasdasddad de 5 puntas con enganche de aluminio.", "marca"=>"PS", "cantComent"=>"2");
$cat3 = array("id"=>"2", "nombre"=>"Botitas", "descripcion"=>"Cintasdasdasddad de 5 puntas con enganche de aluminio.", "marca"=>"PS", "cantComent"=>"2");
$miArray = array("destacado"=>$cat1, $cat2, $cat3);
echo json_encode($miArray);
?>