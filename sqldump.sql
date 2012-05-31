----
-- phpLiteAdmin database dump (http://phpliteadmin.googlecode.com)
-- phpLiteAdmin version: 1.9.1
-- Exported on May 31st, 2012, 05:57:21PM
-- Database file: ./db/iawp3.sqlite
----

----
-- Table structure for administradores
----
CREATE TABLE administradores(id INTEGER PRIMARY KEY NOT NULL, nombre TEXT NOT NULL, password TEXT NOT NULL);

----
-- Data dump for administradores, a total of 0 rows
----
BEGIN TRANSACTION;
COMMIT;

----
-- Table structure for productos
----
CREATE TABLE productos(id INTEGER PRIMARY KEY NOT NULL, nombre TEXT, descripcion TEXT, precio REAL NOT NULL default '0', nro_likes INTEGER NOT NULL default 0 , stock INTEGER NOT NULL DEFAULT 0, id_categoria INTEGER NOT NULL DEFAULT 0, marca TEXT);

----
-- Data dump for productos, a total of 94 rows
----
BEGIN TRANSACTION;
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('1','Cinturones 5 puntos','Cinturones con anclaje de 5 puntos.','911.0','0','1','0','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('2','Cinturones 5 puntos homologados','Cinturones con anclaje de 5 puntos homologados FIAT.','1981.0','0','1','0','GP RACE');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('3','Butaca Efe-Uno Homologada','Butaca homologada FIA modelo Efe-Uno. Colores Rojo-Negro-Azul.','2484.0','0','1','0','Nick');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('4','Butaca Indy Homologada','Butaca homologada FIA modelo Indy. Colores Rojo-Negro-Azul.','2214.0','0','1','0','Nick');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('5','Butaca Indy No Homologada','Butaca no homologada FIA modelo Indy. Colores Rojo-Negro-Azul.','1350.0','0','1','0','Nick');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('6','Butaca Homologada','Butaca homologada FIA. ','2398.0','0','1','0','GP RACE');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('7','Soporte de butaca','Soporte de butaca para marca GP RACE','432.0','0','1','0','GP RACE');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('8','Soporte de butaca','Soporte de butaca para marca Nick.','346.0','0','1','0','Nick');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('9','Extractor de volante','Extractor de volante estria gruesa High-Speed.','604.0','0','1','1','High-Speed');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('10','Extractor de volante','Extractor de volante estria fina ','751.0','0','1','1','Torque');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('11','Espejos exterior','Par de espejos exterior de competicion.','420.0','0','1','1','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('12','Espejo interior','Espejo interior grande con anclajes para jaula.','425.0','0','1','1','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('13','Tablero burbuja','Tablero de fibra de vidrio para poner relojes de presion de aceite, etc.','380.0','0','1','1','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('14','Volante','Volante de diferentes diametros COCO.','729.0','0','1','1','Coco');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('15','Ganchos de capot metalico','Ganchos para el capot metalicos.','146.0','0','1','1','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('16','Red de puertas','Red de puertas para interior de diferentes colores (Rojo-Auzl-Negro)','146.0','0','1','1','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('17','Disco de freno','Juego de disco de freno especiales ventilado para FIAT uno.','381.0','0','2','2','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('18','Pastillas Mazfren','Juego delantero de pastillas Mazfren de competicion.','405.0','0','2','2','Mazfren');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('19','Pastillas 99R','Pastillas de freno 99R de competicion, alta performance. Modelo Fiat Uno','581.0','0','2','2','99R');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('20','Liquido de freno AP 600','Liquido de freno AP 600 en envase de 1L.','340.0','0','2','2','AP');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('21','Pastillas de freno CarbonMetallic','Pastillas de freno CarbonMetallic para modelo TC del Sur.','1202.0','0','2','2','CarbonMetallic');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('22','Pastillas de freno HAWK','Pastillas de freno Hawk modelo TC del Sur.','1713.0','1','1','2','Hawk');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('23','Resorte de suspension','Resorte de suspension nacionales de todas las medidas.','783.0','1','0','2','Rulcon');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('24','Llantas de alinear','Llantas de alineacion para todos los modelos Sudan.','1958.0','0','1','2','Sudan');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('25','Llantas','Llantas sudan todos los modelos.','675.0','0','1','2','Sudan');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('26','Llantas','Llantas ruedas argentinas todos los modelos.','945.0','0','1','2','Ruedas Argentinas');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('27','Filtro de aire','Filtro de aire con canasto para boca de carburador.','510.0','0','2','3','ARC');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('28','Zonda de escape FS','Zonda de escape con display interior FS.','1013.0','0','1','3','FS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('29','Resorte de valvulas MPI','Resorte de valvulas para Fiat con interior.','810.0','0','1','3','MPI');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('30','Resorte de valvulas MPI','Resorte de valvulas para Audi con interiores.','1215.0','0','1','3','MPI');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('31','Bomba electrica Holley','Bomba de nafta electrica Holley.','1965.0','0','1','3','Holley');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('32','Grasa de caja','Grasa de caja Red-Line envase de 1L.','178.0','0','2','3','Red Line');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('33','Grasa de caja','Grasa de caja FX de 2L.','169.0','0','1','3','FX');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('34','Caja de cambios Fiat Uno','Caja de cambios Fiat Uno originales.','2000.0','0','10','3','Fiat');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('35','Opticas delanteras','Juego de opticas delanteras con giro para Fiat Uno','360.0','0','10','4','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('36','Optica delantera','Optica delantera Fiat Uno','150.0','0','10','4','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('37','Opticas delanteras Fire','Optica delantera para Fiat uno modelo Fire.','216.0','0','1','4','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('38','Optica trasera Fire','Optica trasera para Fiat uno modelo Fire.','101.0','0','1','4','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('39','Pistola Goodyear','Pistola a bateria 24v con cargador marca Goodyear.','1919.0','0','1','5','Goodyear');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('40','Bateria pistola Goodyear','Bateria para pistola Goodyear.','891.0','0','1','5','Goodyear');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('41','Calibre de presion 0-30psi','Calibre de presion de neumaticos 0-30psi marca JMH.','164.0','0','5','5','JMH');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('42','Calibre de presion 0-60psi','Calibre de presion de neumaticos 0-60psi marca JMH.','174.0','0','10','5','JMH');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('43','Calibre de presion 0-60psi','Calibre de presion de neumaticos 0-60psi marca Longacre','324.0','0','1','5','Longracre');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('44','Calibre de presion 0-60psi','Calibre de presion de neumaticos 0-60psi vision nocturna marca Longacre','365.0','0','1','5','Longacre');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('45','Calibre de presion 0-30psi','Calibre de presion de neumaticos 0-30psi marca Longacre','365.0','0','1','5','Longacre');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('46','Calibre de presion 0-30psi','Calibre de presion de neumaticos 0-30psi marca Longacre vision nocturna','365.0','0','1','5','Longacre');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('47','Buzo de karting','Buzo antiflama de karting Talle 6-12.','1318.0','0','0','13','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('48','Buzo de karting','Buzo antiflama de karting Talle14-16.','1405.0','0','1','13','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('49','Buzo de karting','Buzo antiflama de karting Talle 46-56.','1460.0','0','1','13','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('50','Buzo de karting','Buzo antiflama de karting Talle 58-60.','1515.0','0','1','13','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('51','Buzo de karting','Buzo antiflama de karting Talle 62.','1625.0','0','1','13','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('52','Buzo de karting','Buzo antiflama de karting Talle 64.','1735.0','0','1','13','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('53','Liquido inifugo','Liquido inifugo para buzo de karting JS.','100.0','0','1','13','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('54','Bolso buzo','Bolso para buzo antiflama.','100.0','0','1','13','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('55','Buzo homologado FIA','Buzo homologado FIA tela nomex. Opaco 1 color','3080.0','0','1','14','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('56','Buzo homologado FIA','Buzo homologado FIA tela nomex. Opaco 2 colores.','3717.0','0','1','14','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('57','Buzo homologado FIA','Buzo homologado FIA tela nomex. Brilloso 1 color.','5204.0','0','1','14','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('58','Buzo homologado FIA','Buzo homologado FIA tela nomex. Brilloso 2 colores.','5735.0','0','1','14','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('59','Buzo homologado FIA','Buzo homologado FIA tela nomex. Brilloso 3 colores.','6266.0','0','1','14','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('60','Capucha algodon','Capucha inifuga de algodon.','39.0','0','1','18','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('61','Capucha homologada','Capucha homologada tela NOMEX.','326.0','0','1','18','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('62','Capucha homologada','Capucha homologada tela NOMEX.','472.0','0','1','18','Sparco');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('63','Guantes homologados','Guantes homologados tela nomex marca Sparco','1000.0','0','1','17','Sparco');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('64','Guantes no homologados','Guantes no homologados JS.','550.0','0','1','17','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('65','Guantes racing','Guantes racing adulto marca JS.','336.0','0','1','17','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('66','Guantes racing','Guantes racing niño marca JS.','293.0','0','1','17','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('67','Guantes premium','Guantes premium adulto marca JS.','386.0','0','1','17','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('68','Protector cervical','Protector cervical nacional de carbono','2306.0','0','1','6','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('69','Protector cervical','Protector cervical nacional de plastico especial.','1746.0','0','1','6','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('70','Camiseta ','Camiseta interior antiflama manga larga/corta tela NOMEX.','527.0','0','1','16','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('71','Pantalon interior','Pantalon interior antiflama tela NOMEX.','527.0','0','1','16','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('72','Botas homologadas','Botas homologadas Sparco.','1566.0','0','1','15','Sparco');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('73','Botas Rodas','Botas JS modelo Rodas niño.','527.0','0','1','15','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('74','Botas Rodas','Botas JS modelo Rodas adultos.','573.0','0','1','15','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('75','Botas Rodas','Botas JS modelo Rodas adultos Nº 46.','632.0','0','1','15','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('76','Botas Racing 1','Botas JS modelo Racing 1 bajas.','573.0','0','1','15','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('77','Botas Racing 2','Botas modelo Racing 2 de cuero.','632.0','0','1','15','JS');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('78','Capot de fire','Capot de Fiat uno modelo fire de fibra de vidrio.','675.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('79','Capot de fiat','Capot de Fiat uno de fibra de vidrio.','608.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('80','Tablero para instrumental','Tablero para instrumental de fibra de vidrio.','302.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('81','Pasarueda TC del Sur','Pasarueda TC del Sur todos los modelos de fibra de vidrio.','302.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('82','Canalizador de radiador','Canalizador de radiador chico de fibra de vidrio.','454.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('83','Canalizador de radiador','Canalizador de radiador grande de fibra de vidrio','1550.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('84','Toma naca','Toma naca para acrilico de puerta.','86.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('85','Ala deflector trompa TC','Ala deflector para trompa de TC en fibra de vidrio.','248.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('86','Trompa Fiat 600','Trompa para Fiat 600 completa de fibra de vidrio','1210.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('87','Trompa TC','Trompa TC modelo 1 con carga.','1700.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('88','Trompa TC','Trompa TC modelo 2','1700.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('89','Trompa TC','Trompa TC modelo 3 liso.','1935.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('90','Tapa baul TC','Tapa de baul de TC todos los modelos en fibra de vidrio.','550.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('91','Toma de aire TC','Toma de aire de TC en fibra de vidrio.','864.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('92','Cubre caja de velocidades','Cubre caja de velocidades Saenz ZF para TC en fibra de vidrio.','616.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('93','Trompa Fiat 128','Trompa para Fiat 128 completa en fibra de vidrio.','1256.0','0','1','7','-');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('94','Tapa de baul Fiat 128','Tapa de baul Fiat 128 en fibra de vidrio','497.0','0','1','7','-');
COMMIT;

----
-- Table structure for categorias
----
CREATE TABLE categorias(id INTEGER PRIMARY KEY NOT NULL, nombre TEXT, descripcion TEXT, nro_likes INTEGER NOT NULL DEFAULT 0);

----
-- Data dump for categorias, a total of 19 rows
----
BEGIN TRANSACTION;
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('0','Cintos y butacas','Todos los accesorios de seguridad homologados y no homologados de alta performance.','1');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('1','Accesorios','Todo los accesorios esteticos, electricos y de utilidad para el interior de tu auto de carreras. Volantes, extractores, espejos, etc.','1');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('2','Suspension','Todos los elementos de suspension necesarios para una buena perfomance de tu auto. Disco de freno, pastillas de freno de competicion, etc.','1');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('3','Motor y caja','Todos los elementos relacionados a la transmicion de tu auto, Resortes de valvula, bomba, filtros de aire, etc.','1');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('4','Frente fiat uno','Todos los elementos relacionados a la estetica delantera de tu FIAT. Opticas delanteras y traseras, giros, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('5','Accesorios externos','Todos los elementos externos que son utilizados por los mecanicos para asegurar alta performance. Pistola neumatica, calibre de presion de neumaticos, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('6','Protectores cervicales','Todas los modelos de protectores cervicales tipo HANS.','1');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('7','Fibra de vidrio','Todos los elementos de fibra de vidrio para el exterior de tu auto. Capot de FIAT, Trompas de FIAT 600, Diferentes modelos de trompas de TC, etc.','0');
--INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('8','Rotulas granzella','Todas las rotulas necesarias para el armado de tu auto de carreras. 8x8 Hembra, 3/8" x 3/8", etc.','0');
--INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('9','Rotulas granzella nuez','Todas las rotulas en forma de nuez necesarias para el armado de tu auto de carreras. 25" x 8" , 25" x 12", etc.','0');
--INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('10','Rotulas UNI-ROT con inserto','Todas las rotulas uni-rot con inserto y de diferentes roscas. 3/8 x 7/16, 7/16, 1/2 , etc.','0');
--INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('11','Rotulas UNI-ROT con pista de nylon','Todas las rotulas uni-rot con pista de nylon y de diferentes roscas. 1/4, 5/16, 3/8, etc.','0');
--INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('12','Rotulas UNI-ROT nuez','Todas las rotulas uni-rot con nuez y de diferentes roscas. 9mm, 12mm, 14mm, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('13','Buzos antiflmama de karting PREMIUM','Todas los buzos antiflamas para chicos del karting en todos los talles. 6-12, 14-16, etc.','1');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('14','Buzos antiflama homologado FIA','Todas los buzos antiflamas homologados con tela nomex marca JS opacos o brillosos.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('15','Botas antiflama','Todas los modelos de botas antiflamas homologados.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('16','Ropa interior','Todas la ropa interior homogolada tela NOMEX.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('17','Guantes','Todos los modelos de guantes JS o tela NOMEX.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('18','Capuchas','Todos los modelos de capuchas inifugas tela NOMEX y homologadas.','0');
COMMIT;

----
-- Table structure for tags
----
CREATE TABLE tags (id_producto INTEGER NOT NULL, tag TEXT NOT NULL, primary key(id_producto,tag));

----
-- Data dump for tags, a total of 94 rows
----
BEGIN TRANSACTION;
INSERT INTO tags (id_producto,tag) VALUES ('1','');
INSERT INTO tags (id_producto,tag) VALUES ('2','');
INSERT INTO tags (id_producto,tag) VALUES ('3','');
INSERT INTO tags (id_producto,tag) VALUES ('4','');
INSERT INTO tags (id_producto,tag) VALUES ('5','');
INSERT INTO tags (id_producto,tag) VALUES ('6','');
INSERT INTO tags (id_producto,tag) VALUES ('7','');
INSERT INTO tags (id_producto,tag) VALUES ('8','');
INSERT INTO tags (id_producto,tag) VALUES ('9','');
INSERT INTO tags (id_producto,tag) VALUES ('10','');
INSERT INTO tags (id_producto,tag) VALUES ('11','');
INSERT INTO tags (id_producto,tag) VALUES ('12','');
INSERT INTO tags (id_producto,tag) VALUES ('13','');
INSERT INTO tags (id_producto,tag) VALUES ('14','');
INSERT INTO tags (id_producto,tag) VALUES ('15','');
INSERT INTO tags (id_producto,tag) VALUES ('16','');
INSERT INTO tags (id_producto,tag) VALUES ('17','');
INSERT INTO tags (id_producto,tag) VALUES ('18','');
INSERT INTO tags (id_producto,tag) VALUES ('19','');
INSERT INTO tags (id_producto,tag) VALUES ('20','');
INSERT INTO tags (id_producto,tag) VALUES ('21','');
INSERT INTO tags (id_producto,tag) VALUES ('22','');
INSERT INTO tags (id_producto,tag) VALUES ('23','');
INSERT INTO tags (id_producto,tag) VALUES ('24','');
INSERT INTO tags (id_producto,tag) VALUES ('25','');
INSERT INTO tags (id_producto,tag) VALUES ('26','');
INSERT INTO tags (id_producto,tag) VALUES ('27','');
INSERT INTO tags (id_producto,tag) VALUES ('28','');
INSERT INTO tags (id_producto,tag) VALUES ('29','');
INSERT INTO tags (id_producto,tag) VALUES ('30','');
INSERT INTO tags (id_producto,tag) VALUES ('31','');
INSERT INTO tags (id_producto,tag) VALUES ('32','');
INSERT INTO tags (id_producto,tag) VALUES ('33','');
INSERT INTO tags (id_producto,tag) VALUES ('34','');
INSERT INTO tags (id_producto,tag) VALUES ('35','');
INSERT INTO tags (id_producto,tag) VALUES ('36','');
INSERT INTO tags (id_producto,tag) VALUES ('37','');
INSERT INTO tags (id_producto,tag) VALUES ('38','');
INSERT INTO tags (id_producto,tag) VALUES ('39','');
INSERT INTO tags (id_producto,tag) VALUES ('40','');
INSERT INTO tags (id_producto,tag) VALUES ('41','');
INSERT INTO tags (id_producto,tag) VALUES ('42','');
INSERT INTO tags (id_producto,tag) VALUES ('43','');
INSERT INTO tags (id_producto,tag) VALUES ('44','');
INSERT INTO tags (id_producto,tag) VALUES ('45','');
INSERT INTO tags (id_producto,tag) VALUES ('46','');
INSERT INTO tags (id_producto,tag) VALUES ('47','');
INSERT INTO tags (id_producto,tag) VALUES ('48','');
INSERT INTO tags (id_producto,tag) VALUES ('49','');
INSERT INTO tags (id_producto,tag) VALUES ('50','');
INSERT INTO tags (id_producto,tag) VALUES ('51','');
INSERT INTO tags (id_producto,tag) VALUES ('52','');
INSERT INTO tags (id_producto,tag) VALUES ('53','');
INSERT INTO tags (id_producto,tag) VALUES ('54','');
INSERT INTO tags (id_producto,tag) VALUES ('55','');
INSERT INTO tags (id_producto,tag) VALUES ('56','');
INSERT INTO tags (id_producto,tag) VALUES ('57','');
INSERT INTO tags (id_producto,tag) VALUES ('58','');
INSERT INTO tags (id_producto,tag) VALUES ('59','');
INSERT INTO tags (id_producto,tag) VALUES ('60','');
INSERT INTO tags (id_producto,tag) VALUES ('61','');
INSERT INTO tags (id_producto,tag) VALUES ('62','');
INSERT INTO tags (id_producto,tag) VALUES ('63','');
INSERT INTO tags (id_producto,tag) VALUES ('64','');
INSERT INTO tags (id_producto,tag) VALUES ('65','');
INSERT INTO tags (id_producto,tag) VALUES ('66','');
INSERT INTO tags (id_producto,tag) VALUES ('67','');
INSERT INTO tags (id_producto,tag) VALUES ('68','');
INSERT INTO tags (id_producto,tag) VALUES ('69','');
INSERT INTO tags (id_producto,tag) VALUES ('70','');
INSERT INTO tags (id_producto,tag) VALUES ('71','');
INSERT INTO tags (id_producto,tag) VALUES ('72','');
INSERT INTO tags (id_producto,tag) VALUES ('73','');
INSERT INTO tags (id_producto,tag) VALUES ('74','');
INSERT INTO tags (id_producto,tag) VALUES ('75','');
INSERT INTO tags (id_producto,tag) VALUES ('76','');
INSERT INTO tags (id_producto,tag) VALUES ('77','');
INSERT INTO tags (id_producto,tag) VALUES ('78','');
INSERT INTO tags (id_producto,tag) VALUES ('79','');
INSERT INTO tags (id_producto,tag) VALUES ('80','');
INSERT INTO tags (id_producto,tag) VALUES ('81','');
INSERT INTO tags (id_producto,tag) VALUES ('82','');
INSERT INTO tags (id_producto,tag) VALUES ('83','');
INSERT INTO tags (id_producto,tag) VALUES ('84','');
INSERT INTO tags (id_producto,tag) VALUES ('85','');
INSERT INTO tags (id_producto,tag) VALUES ('86','');
INSERT INTO tags (id_producto,tag) VALUES ('87','');
INSERT INTO tags (id_producto,tag) VALUES ('88','');
INSERT INTO tags (id_producto,tag) VALUES ('89','');
INSERT INTO tags (id_producto,tag) VALUES ('90','');
INSERT INTO tags (id_producto,tag) VALUES ('91','');
INSERT INTO tags (id_producto,tag) VALUES ('92','');
INSERT INTO tags (id_producto,tag) VALUES ('93','');
INSERT INTO tags (id_producto,tag) VALUES ('94','');
COMMIT;

----
-- Table structure for usuarios
----
CREATE TABLE usuarios(usuario TEXT PRIMARY KEY NOT NULL, password TEXT NOT NULL);

----
-- Data dump for usuarios, a total of 1 rows
----
BEGIN TRANSACTION;
INSERT INTO usuarios (usuario,password) VALUES ('admin','admin');
COMMIT;

----
-- Table structure for configuracion
----
CREATE TABLE configuracion(id INTEGER NOT NULL, num_limit INTEGER NOT NULL default 5 , ver_destacado TEXT NOT NULL default 'true', ord TEXT);

----
-- Data dump for configuracion, a total of 1 rows
----
BEGIN TRANSACTION;
INSERT INTO configuracion (id,num_limit,ver_destacado,ord) VALUES ('0','5','true','masV');
COMMIT;

----
-- Structure for index sqlite_autoindex_tags_1 on table tags
----
;

----
-- Structure for index sqlite_autoindex_usuarios_1 on table usuarios
----
;
