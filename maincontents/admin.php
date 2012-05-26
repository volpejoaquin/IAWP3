<script src="js/admin.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.validate.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery-ui-1.8.20.custom.min.js" type="text/javascript" charset="utf-8"></script>
<section id="main">
	<div id="leftcontainer">
		<?php
			session_start();
			if (isset($_SESSION['logueado'])) {				
		?>
			<h2 class="mainheading link" onClick="verCategorias();">
			{tituloAccionAdmin}
			</h2>
		
		<div id="acciones">
			
			<a class="mainheading link" id="menuAgregar" >
				<h3>Agregar Nuevo Producto</h3>
			</a>
			<div id="divA" class="none">
				<div id="erroresAgregar">
					
				</div>
				<form id="agregarForm" method="post" action="">
					Nombre: <input name="nombre" type="text" size="30" tabindex="1"><br/>
					Descripci&oacute;n: <input name="descripcion" type="text" size="30" tabindex="2"><br/>
					Precio: <input name="precio" type="text" size="30" value="0.00" tabindex="3"><br/>
					Stock: <input name="stock" type="text" size="30" value="0" tabindex="4"><br/>
					Marca: <input name="marca" type="text" size="30"  tabindex="5"><br/>
					Tags: <input name="tags" type="text" size="30" tabindex="6"><br/>
					Categor&iacute;a: <select id='list' name="list" tabindex="7" onchange="validarCat()"></select>
							<div id="otraCat">
								Nueva Categor&iacute;a: <input type="text" name="nuevaCat" tabindex="8"><br/>
								Descripci&oacute;n: <input type="text" name="nuevaDesc" tabindex="9"><br/>
							</div>
					<input type="hidden" name="categoria" id="categoria" />
					<br/>
					<input type="submit" value="Agregar" tabindex="10"/>	
				</form>
			</div>
			<div id="resultA" class="post"></div>
			
			<a class="mainheading link" id="menuModificar">
				<h3>Modificar/Eliminar Producto</h3>
			</a>
			<div id="divB" class="none">
				<div id="tablaB" >
					<div id="dialog-form" title="Modificar información de un producto">
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
							<input type="number" name="stock" id="diagStock" value="" class="ui-widget-content ui-corner-all" tabindex="4"/><br/>
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
			<div id="resultB" class="post"></div>
				
				
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