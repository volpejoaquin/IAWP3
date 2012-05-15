<?php

// Incluyo las clases php necesarias
require_once('_lib/parser.php');
require_once('_lib/descriptor.php');

// Creo el descriptor del sito web.
$desc = new descriptor("conf/conf.ini");

// Determino el maincontent correspondiente.
if (empty($_GET['mc'])) {
	$maincontent = 'maincontents/inicio.html';
} else {
	switch ($_GET['mc']) {
		case 'boton1' :
			$maincontent = 'maincontents/inicio.html';
			break;
		case 'boton2' :
			$maincontent = 'maincontents/categorias.html';
			break;
		case 'boton3' :
			$maincontent = 'maincontents/admin.html';
			break;
		case 'boton4' :
			$maincontent = 'maincontents/contacto.html';
			break;
	}
}

$desc->agregarItem('maincontent', $maincontent);

// Creo el parser.
$parser = new templateParser($desc->getTemplate());
$parser->parseTemplate($desc->getTags());

// Muestro la página generada.
$pagina = $parser->display();
echo $pagina;
?>