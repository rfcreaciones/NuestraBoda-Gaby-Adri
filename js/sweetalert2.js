



Swal.fire({
	// title:'Reserva el Día',
	//text: '',
	html:'<p class="textos-alert-inicio">Patricia Gabriela Hernandez Lima <br> y <br> Adriana Herrera Cruz</p><br><p class="textos-alert-inicio-T3">Tenemos el honor de invitar a usted y a su apreciable familia a Nuestra Boda</p><br><p class="textos-alert-inicio-T2">Gaby <br>&<br> Adri</p></div>',
	//icon:'success'
	confirmButtonText:'Abrir Invitación',
	confirmButtonColor: "#917c07f1",
	footer:'Te Esperamos, No Faltes!',
	width:'100%',
	allowOutsideClick: false,
	background: 'url(img/fondo2.jpg)',
	
	// background:'rgba(0,0,123,0.4)'
	// imageUrl: 'https://unsplash.it/400/200',

	
}).then((result)=>{
	if(result.isConfirmed){
		
		musica=true;
		audio.play();
		$('.volumen').attr("src","img/no-sound.png");
		$('div').removeClass('visible')
	


	}

});



$('#ceremonia').click(function () {
Swal.fire({
	title:'Ubicación de la Ceremonía ',
	//text: '',
	html:'<p>Parroquia de Santa Isabel Chalma<br>Cuándo: 30 de Junio de 2024<br>Dirección:Manzana 004, 56935 Santa Isabel Chalma, Méx.</p><div class="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.443951957966!2d-98.76400439800341!3d19.156383477114716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3cba0f600bfd%3A0xcfeb02ed0401c784!2sCapilla%20de%20Santa%20Isabel!5e0!3m2!1ses-419!2smx!4v1713588646744!5m2!1ses-419!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
	//icon:'success'
	confirmButtonText:'Cerrar',
	//footer:'Parroquia de Dulce Nombre de Jesus ',

});
});

$('#recepcion').click(function () {
	Swal.fire({
		title:'Ubicación de la Recepción ',
		//text: '',
	
		html:'<p>Ignacio Zaragoza, Zona Centro, Centro, 91000 Xalapa-Enríquez, Ver.</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.352646131441!2d-96.9202243!3d19.526467999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2dff3eb0e65b%3A0x53e24a8b97fdf1de!2sSindicato%20Ferrocarrilero!5e0!3m2!1ses!2smx!4v1729306526810!5m2!1ses!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>',
		//icon:'success'
		confirmButtonText:'Cerrar',
		//footer:'Parroquia de Dulce Nombre de Jesus ',
	
	});
});

$('#liverpool').click(function () {
	Swal.fire({
		title:'Mesa de regalos Liverpool',
		//text: '',
	
		html:'<p>Número de Evento: 51545309<p/><br> <a href="https://mesaderegalos.liverpool.com.mx/eventodebusqueda" target="_blank"> Ir a Liverpool</a>',
		//icon:'success'
		confirmButtonText:'Cerrar',
		confirmButtonColor: "#917c07f1",
		//footer:'Parroquia de Dulce Nombre de Jesus ',
	
	});
});

$('#transferencia').click(function () {
		Swal.fire({
			title:'Datos para Transferencia',
			//text: '',
		
			html:'<p>Cuenta BBVA<p/><p>Nombre: Adriana Herrera Cruz<p/><br>Clabe: 012840015261932040',
			//icon:'success'
			confirmButtonText:'Cerrar',
			confirmButtonColor: "#917c07f1",
			//footer:'Parroquia de Dulce Nombre de Jesus ',
		
		});
});
	







