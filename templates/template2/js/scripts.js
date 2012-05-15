function menuActual(boton) {
	
	$.ajax('index.php', {
		type : 'get',
		data : {
			'mc' : boton
		},
		success : function(resp) {
			document = resp;
		}
	});

	$("#b1").removeClass("current");
	$("#b2").removeClass("current");
	$("#b3").removeClass("current");
	$("#b4").removeClass("current");
	
	if (boton == 'boton1') {
		$("#b1").addClass("current");
	}
	if (boton == 'boton2') {
		$("#b2").addClass("current");
	}
	if (boton == 'boton3') {
		$("#b3").addClass("current");
	}
	if (boton == 'boton4') {
		$("#b4").addClass("current");
	}
}