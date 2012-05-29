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
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('0','Sin Categoria','','17');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('1','Accesorios','Todo tipo de elementos que no pueden faltar en tu auto!','25');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('2',' Suspension','Suspensiones y articulos relacionados','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('3','Cintos y butacas','','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('4','Fibra de vidrio','','0');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('5','Motor y caja','','1');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('6','Nueva','Categoria','496');
INSERT INTO categorias (id,nombre,descripcion,nro_likes) VALUES ('7','OTRA','mas','0');
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
