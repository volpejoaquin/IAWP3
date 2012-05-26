<script src="js/admin.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.validate.min.js" type="text/javascript" charset="utf-8"></script>
<section id="main">
	<div id="leftcontainer">
		<?php
			session_start();
			if (isset($_SESSION['logueado'])) {				
		?>
			<h2 class="mainheading link" onClick="verCategorias();">
			{tituloAccionAdmin}
				<div id="logout" class="logout">
					<a id="ult" href="index.php?mc=Logout" class="icono" title="Cerrar sesion">Cerrar sesion</a>
				</div>
			</h2>
			
			<div id="acciones">
				
				<a class="mainheading link" id="menuAgregar" >
					<h3>Agregar Nuevo Producto</h3>
				</a>
				<div id="divA" class="none">
					<form id="agregarForm" method="post" action="">
						Nombre: <input name="nombre" type="text" size="30" tabindex="1"><br/>
						Descripci&oacute;n: <input name="descripcion" type="text" size="30" tabindex="2"><br/>
						Precio: <input name="precio" type="text" size="30" tabindex="3"><br/>
						Stock: <input name="stock" type="text" size="30" tabindex="4"><br/>
						Marca: <input name="marca" type="text" size="30"  tabindex="5"><br/>
						Tags: <input name="tags" type="text" size="30" tabindex="6"><br/>
						Categor&iacute;a: <select id='list' name="list" tabindex="7" onchange="validarCat()"></select>
								<div id="otraCat">
									Nueva Categor&iacute;a: <input type="text" name="nuevaCat" tabindex="8"><br/>
									Descripci&oacute;n: <input type="text" name="nuevaDesc" tabindex="9"><br/>
								</div>
						<input id='categoria' name="categoria" type="hidden"/>
						<br/>
						<input type="submit" value="Agregar" tabindex="10"/>	
					</form>
				</div>
				<div id="result" class="post"> <h2></h2></div>
				<a class="mainheading link" id="menuModificar">
					<h3>Modificar/Eliminar Producto</h3>
				</a>
				<div id="divB" class="none">
						bbbbbbbb
					</div>
				<a class="mainheading link" id="menuConfigurar">
					<h3>Configurar Menú Principal</h3>
					
				</a>
				<div id="divC" class="none">
						ccccccccc
					</div>
				<a class="mainheading link" id="menuBackup">
					<h3>Realizar backup de archivos y datos</h3>
				</a>
					<div id="divD" class="none">
						dddddddd
					</div>
				
				
			</div>
		<?php
			}					
			else {					
		?>
			<h2 class="mainheading link" onClick="verCategorias();">
			{tituloLoginAdmin}
			</h2>
			
			<div id="acciones">	
				<div id="login">
					<input class="searchInput" name="usuario" id="usuario" type="text">
				</div>
				<div id="login">
					<input class="searchInput" name="password" id="password" type="password">
				</div>	
				<div id="entrar">
					<input id="botonLogin" src="templates/template2/images/searchbtn.png" alt="Entrar" type="image">
				</div>	
				<div id="error" class="none">
				</div>
			</div>
		<?php
			}
		?>		
		<div class="clear"></div>
	</div>

</section>