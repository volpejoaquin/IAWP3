<script src="js/admin.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.validate.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery-ui-1.8.20.custom.min.js" type="text/javascript" charset="utf-8"></script>
<section id="main">
	<div id="leftcontainer">
		<?php
			session_start();
			if (isset($_SESSION['logueado'])) {				
		?>
			<h2 class="mainheading link">
			{tituloAccionAdmin}
			<div id="logout" class="logout">
				<a href="index.php?mc=Logout" class="icono" title="Cerrar sesion">Cerrar sesion</a>
			</div>
			</h2>
			<div id="produc1">
			<h3 class="menuAdmin link" id="menuProductos">
					Productos
				</h3>
			<ul id="acciones">
				<li>
				<h3 class="link submenu" id="menuAgregar" >
					Agregar Nuevo Producto
				</h3>
				<div id="agregarP" class="none">
					<div id="erroresAgregar">
						
					</div>
					<form id="agregarForm" method="post" action="">
						Nombre: <input name="nombre" type="text" size="30" tabindex="1"><br/>
						Descripci&oacute;n: <input name="descripcion" type="text" size="30" tabindex="2"><br/>
						Precio: <input name="precio" type="text" size="30" value="0.00" tabindex="3"><br/>
						Stock: <input name="stock" type="text" size="30" value="0" tabindex="4"><br/>
						Marca: <input name="marca" type="text" size="30"  tabindex="5"><br/>
						Tags: <input name="tags" type="text" size="30" tabindex="6"><br/>
						Categor&iacute;a: <select id='list' name="list" tabindex="7" ></select>
						<br/>
						<input type="submit" value="Agregar" tabindex="10"/>	
					</form>
				</div>
				<div id="resultAP" class="resultado"></div>
				</li>
				<li>
				<h3 class="link submenu" id="menuModificar">
					Modificar/Eliminar Producto
				</h3>
				<div id="modificarP" class="none">
					<div id="tablaB" >
						<div id="dialogModificarProd" title="Modificar información de un producto">
							<p class="validacion">Todos los campos son obligatorios.</p><br/>
							
							<form id="modificarForm" method="post" action="">
							<fieldset>
								<input type="hidden" id="hiddenId"/>
								<label for="name">Nombre </label>
								<input type="text" name="name" id="diagName" class="ui-widget-content ui-corner-all" tabindex="1"/><br/>
								<label for="desc">Descripci&oacute;n </label>
								<input type="text" name="desc" id="diagDesc" value="" class="ui-widget-content ui-corner-all"  tabindex="2"/><br/>
								<label for="precio">Precio </label>
								<input type="text" name="precio" id="diagPrecio" value="" class="ui-widget-content ui-corner-all" tabindex="3"/><br/>
								<label for="stock">Stock </label>
								<input type="text" name="stock" id="diagStock" value="" class="ui-widget-content ui-corner-all" tabindex="4"/><br/>
								<label for="categoria">Categor&iacute;a </label>
								<select id='diagCat' name="categoria" class="ui-widget-content ui-corner-all"  tabindex="5"></select><br/>
								<label for="marca">Marca </label>
								<input type="text" name="marca" id="diagMarca" value="" class="ui-widget-content ui-corner-all" tabindex="6" /><br/>
							</fieldset>
							</form>
						</div>
						<div id="dialogElim" title="Eliminar un producto">
							<input type="hidden" id="deleteId" />
							<div id="deleteInfo">
								
							</div>
						</div>
						<div id="tablaProductos">
							<table id="tableProd" class="viewTable" cellspacing="2" cellpadding="0" border="0" >
								<thead id="theadProductos">
									<tr>
									<th class="tdheader">Id</th>
									<th class="tdheader">Nombre</th>
									<th class="tdheader">Descripción</th>
									<th class="tdheader">Precio</th>
									<th class="tdheader">Stock</th>
									<th class="tdheader">Categoría</th>
									<th class="tdheader">Marca</th>
									<th></th>
									<th></th>	
									</tr>							
								</thead>
								<tbody id="tbodyProductos">
								</tbody>
							</table>
						</div>
					</div>
				</div>
				</li>
				<div class="resultado"></div>
			</ul>
			</div>
			<div id="categ1">
				<h3 class="menuAdmin link" id="menuCateg">
					Categor&iacute;as
				</h3>
				<div id="accCat">
					<h3 class="link submenu" id="menuAgregarCategorias">
						Agregar Categor&iacute;a
					</h3>
					<div id="agregarC" class="none">
						<div id="erroresAgregarCat">
						</div>
						<form id="agregarCatForm" method="post" action="">
							Nombre: <input name="nombre" type="text" size="30" tabindex="1"><br/>
							Descripci&oacute;n: <input name="descripcion" type="text" size="30" tabindex="2"><br/>
							<br/>
						<input type="submit" value="Agregar" tabindex="10"/>	
						</form>
					</div>
					<div id="resultAC" class="resultado"></div>
					
					
					<h3 class="link submenu" id="menuModificarCategorias">
						Modificar/Eliminar Categor&iacute;a
					</h3>
					<div id="modificarC" class="none">
						<div id="tablaC" >
						<div id="dialogModificarCat" title="Modificar información de un producto">
							<p class="validacion">Todos los campos son obligatorios.</p><br/>
							
							<form id="modificarCatForm" method="post" action="">
							<fieldset>
								<input type="hidden" id="hiddenIdCat"/>
								<label for="name">Nombre </label>
								<input type="text" name="name" id="diagCatName" class="ui-widget-content ui-corner-all" tabindex="1"/><br/>
								<label for="desc">Descripci&oacute;n </label>
								<input type="text" name="desc" id="diagCatDesc" value="" class="ui-widget-content ui-corner-all"  tabindex="2"/><br/>
								<label for="nroLikes">Nro Likes </label>
								<input type="text" name="nroLikes" id="diagCatLikes" value="" class="ui-widget-content ui-corner-all" tabindex="3"/><br/>
							</fieldset>
							</form>
						</div>
						<div id="dialogElimCat" title="Eliminar una categoría">
							<input type="hidden" id="deleteIdCat" />
							<div id="deleteInfoCat">
								
							</div>
						</div>
						<div id="tablaCategorias">
							<table id="tableCats" class="viewTable" cellspacing="2" cellpadding="0" border="0" >
								<thead id="theadCategorias">
									<tr>
									<th class="tdheader">Id</th>
									<th class="tdheader">Nombre</th>
									<th class="tdheader">Descripci&oacute;n</th>
									<th class="tdheader">Nro de Likes</th>
									<th></th>
									<th></th>	
									</tr>							
								</thead>
								<tbody id="tbodyCategorias">
								</tbody>
							</table>
						</div>
					</div>
					</div>
					<div class="resultado"></div>
				</div>
			</div>	
				
			<h3 class="menuAdmin link" id="menuConfigurar">
				Configurar Menú Principal
			</h3>
			
			<div id="accCon" class="none">
				<h3 class="link submenu" id="menuConfigurarConfiguracion">
						Configuracion
				</h3>
				<div id="modificarConf" class="none">
					<div id="erroresAgregarCat">
					</div>
					<form id="agregarCatForm" method="post" action="">
						Nombre: <input name="nombre" type="text" size="30" tabindex="1"><br/>
						Descripci&oacute;n: <input name="descripcion" type="text" size="30" tabindex="2"><br/>
						<br/>
					<input type="submit" value="Agregar" tabindex="10"/>	
					</form>
				</div>
				<div id="resultAC" class="resultado"></div>
			</div>
				
			<h3 class="menuAdmin link" id="menuBackup">
				Realizar backup de archivos y datos
			</h3>
				<div id="divD" class="none">
					dddddddd
				</div>
			
			
		
		<?php
			}					
			else {					
		?>
			<h2 class="mainheading link">
			{tituloLoginAdmin}
			</h2>
			
			<div id="accionesLogin">	
				<div id="login">
					<input class="searchInput" name="usuario" id="usuario" type="text" value="Usuario">
				</div>
				<div id="login">
					<input class="searchInput" name="password" id="password" type="text" value="Password">
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