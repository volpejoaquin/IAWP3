<script src="js/admin.js" type="text/javascript" charset="utf-8"></script>
<script src="js/slimbox2.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.uploadify.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.validate.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.alerts.js" type="text/javascript" charset="utf-8"></script>
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
						<table class="sinBorde">
							<tr>
								<td>
									Nombre:
								</td>
								<td>
									<input name="nombre" type="text" size="30" tabindex="1">
								</td>
							</tr>
							<tr>
								<td>
									Descripci&oacute;n:
								</td>
								<td>	
									<input name="descripcion" type="text" size="30" tabindex="2">
									</td>
							</tr>
							<tr>
								<td>
									Precio: 
								</td>
								<td>
									<input name="precio" type="text" size="30" value="0.00" tabindex="3">
								</td>
							</tr>
							<tr>
								<td>
									Stock: 
								</td>
								<td>
									<input name="stock" type="text" size="30" value="0" tabindex="4">
								</td>
							</tr>
							<tr>
								<td>
									Marca:
								</td>
								<td>
									<input name="marca" type="text" size="30"  tabindex="5">
								</td>
							</tr>
							<tr>
								<td>
									Tags:
								</td>
								<td>
									<input name="tags" type="text" size="30" tabindex="6">
								</td>
							</tr>
							<tr>
								<td>
									Categor&iacute;a: 
								</td>
								<td>
									<select id='list' name="list" tabindex="7" ></select>
								</td>
							</tr>
							<tr>
								<td class="center" colspan="2">
									<input type="image" alt="Agregar" src="templates/template2/images/agregarbtn.png" tabindex="10"/>	
								</td>
							</tr>
						</table>
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
				<li>
				<h3 class="link submenu" id="menuImagenes">
					Agregar/Eliminar Im&aacute;genes
				</h3>
				<div id='nuevaImg'>
					<label for="file">
							<span id="uploadText"></span> 
							<input type="hidden" id="idImgUpload"/>
							<input type="file" name='file' class="uploadify" id="file_upload"/>
							<div id="file_upload_queue" class="uploadify-queue"></div>
							<p><a id="doUploadButton"href="javascript: doUpload()">Subir primera imagen de la lista</a></p>
							<p><a id="finishButton"href="javascript: finishUpload()">Terminar</a></p>
						</label>
					
				</div>
				<div id="agregarI" class="none">
					<div id="optionsI">
					<span>Haga click sobre el nombre de las im&aacute;genes para previsualizarlas.</span>
					</div>
					
					
					<div id="imgUpload">
						
					</div>
					<div id="tablaImagenes">
							<table id="tableImg" class="viewTable" cellspacing="2" cellpadding="0" border="0" >
								<thead id="theadImagenes">
									<tr>
									<th class="tdheader">Id</th>
									<th class="tdheader">Nombre</th>
									<th class="tdheader">Im&aacute;genes</th>
									<th></th>
									<th></th>	
									</tr>							
								</thead>
								<tbody id="tbodyImagenes">
								</tbody>
							</table>
					</div>
					<div id="dialogAgregarImg">
						
					</div>
					<div id="dialogElimImg">
						
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
							<table class="sinBorde">
								<tr>
									<td>
										Nombre:
									</td>
									<td>
										<input name="nombre" type="text" size="30" tabindex="1">
									</td>
								</tr>
								<tr>
									<td>
									Descripci&oacute;n:
									</td>
									<td> 
										<input name="descripcion" type="text" size="30" tabindex="2">
									</td>
								</tr>
								<tr>
									<td class="center" colspan="2">
										<input type="image" alt="Agregar" src="templates/template2/images/agregarbtn.png" tabindex="10"/>	
									</td>
								</tr>
							</table>
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
				<div id="modificarConf" class="">
					<div id="erroresModificarConf">
					</div>
					<table class="sinBorde">
						<tr>
							<td>
							Ver destacado:
							</td>
							<td>
							<input type="checkbox" id="ver_destacado" value="destacado"><br>
							</td>
						</tr>
						<tr>
							<td>
							Limite de lista de productos
							</td>
							<td>
							<select id="limite">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
							</td>
						</tr>
						<tr>
							<td colspan="2" class="center">
								<input id="botonGuardarConf" src="templates/template2/images/guardarbtn.png" alt="Entrar" type="image">
							</td>
						</tr>
					</table>
				</div>
				<div id="resultMC" class="resultado"></div>
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