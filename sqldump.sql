----
-- phpLiteAdmin database dump (http://phpliteadmin.googlecode.com)
-- phpLiteAdmin version: 1.9.1
-- Exported on May 29th, 2012, 04:57:28PM
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
-- Data dump for productos, a total of 6 rows
----
BEGIN TRANSACTION;
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('0',' Volante carpo',' Volante carpo de diametro 270mm para formula ','0.0','2','0','1','Cualquiera');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('1','Extractor de volante estria gruesa','','550.0','26','2','1','Marcaaa');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('2','Extractor de volante estria fina','','700.0','8','2','1','Marcaaaaa');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('3','Espejo exterior','Juego de espejos exteriores de tc','420.0','13','2','1','');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('4','Espejo interior','Espejo interior modelo tc con enganche para caño de jaula','441.0','19','0','1','');
INSERT INTO productos (id,nombre,descripcion,precio,nro_likes,stock,id_categoria,marca) VALUES ('6','     Volante carpo','     Volante carpo de diametro 360 mm o 380 mm     ','4.54','21','48','6','    Alguna marca    ');
COMMIT;

----
-- Table structure for categorias
----
CREATE TABLE categorias(id INTEGER PRIMARY KEY NOT NULL, nombre TEXT, descripcion TEXT, nro_likes INTEGER NOT NULL DEFAULT 0);

----
-- Data dump for categorias, a total of 8 rows
----
BEGIN TRANSACTION;
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('0','Cintos y butacas','Todos los accesorios de seguridad homologados y no homologados de alta performance.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('1','Accesorios','Todo los accesorios esteticos, electricos y de utilidad para el interior de tu auto de carreras. Volantes, extractores, espejos, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('2','Suspension','Todos los elementos de suspension necesarios para una buena perfomance de tu auto. Disco de freno, pastillas de freno de competicion, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('3','Motor y caja','Todos los elementos relacionados a la transmicion de tu auto, Resortes de valvula, bomba, filtros de aire, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('4','Frente fiat uno','Todos los elementos relacionados a la estetica delantera de tu FIAT. Opticas delanteras y traseras, giros, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('5','Accesorios externos','Todos los elementos externos que son utilizados por los mecanicos para asegurar alta performance. Pistola neumatica, calibre de presion de neumaticos, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('6','Matafuegos','Todos los elementos relacionados con los matafuegos y kit de interior.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('7','Fibra de vidrio','Todos los elementos de fibra de vidrio para el exterior de tu auto. Capot de FIAT, Trompas de FIAT 600, Diferentes modelos de trompas de TC, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('8','Rotulas granzella','Todas las rotulas necesarias para el armado de tu auto de carreras. 8x8 Hembra, 3/8" x 3/8", etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('9','Rotulas granzella nuez','Todas las rotulas en forma de nuez necesarias para el armado de tu auto de carreras. 25" x 8" , 25" x 12", etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('10','Rotulas UNI-ROT con inserto','Todas las rotulas uni-rot con inserto y de diferentes roscas. 3/8 x 7/16, 7/16, 1/2 , etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('11','Rotulas UNI-ROT con pista de nylon','Todas las rotulas uni-rot con pista de nylon y de diferentes roscas. 1/4, 5/16, 3/8, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('12','Rotulas UNI-ROT nuez','Todas las rotulas uni-rot con nuez y de diferentes roscas. 9mm, 12mm, 14mm, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('13','Buzos antiflmama de karting PREMIUM','Todas los buzos antiflamas para chicos del karting en todos los talles. 6-12, 14-16, etc.','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('14','Buzos antiflama homologado FIA','Todas los buzos antiflamas para chicos del karting en todos los talles. 6-12, 14-16, etc.','0');
COMMIT;

----
-- Table structure for tags
----
CREATE TABLE tags (id_producto INTEGER NOT NULL, tag TEXT NOT NULL, primary key(id_producto,tag));

----
-- Data dump for tags, a total of 6 rows
----
BEGIN TRANSACTION;
INSERT INTO tags (id_producto,tag) VALUES ('0','volante');
INSERT INTO tags (id_producto,tag) VALUES ('0','carpo');
INSERT INTO tags (id_producto,tag) VALUES ('1','Extractor');
INSERT INTO tags (id_producto,tag) VALUES ('1','volante');
INSERT INTO tags (id_producto,tag) VALUES ('1','estria');
INSERT INTO tags (id_producto,tag) VALUES ('1','gruesa');
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
