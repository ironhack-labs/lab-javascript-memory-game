var cards = [{
		name: 'aquaman',
		img: 'aquaman.jpg'
	},
	{
		name: 'batman',
		img: 'batman.jpg'
	},
	{
		name: 'captain america',
		img: 'captain-america.jpg'
	},
	{
		name: 'fantastic four',
		img: 'fantastic-four.jpg'
	},
	{
		name: 'flash',
		img: 'flash.jpg'
	},
	{
		name: 'green arrow',
		img: 'green-arrow.jpg'
	},
	{
		name: 'green lantern',
		img: 'green-lantern.jpg'
	},
	{
		name: 'ironman',
		img: 'ironman.jpg'
	},
	{
		name: 'spiderman',
		img: 'spiderman.jpg'
	},
	{
		name: 'superman',
		img: 'superman.jpg'
	},
	{
		name: 'the avengers',
		img: 'the-avengers.jpg'
	},
	{
		name: 'thor',
		img: 'thor.jpg'
	},
	{
		name: 'aquaman',
		img: 'aquaman.jpg'
	},
	{
		name: 'batman',
		img: 'batman.jpg'
	},
	{
		name: 'captain america',
		img: 'captain-america.jpg'
	},
	{
		name: 'fantastic four',
		img: 'fantastic-four.jpg'
	},
	{
		name: 'flash',
		img: 'flash.jpg'
	},
	{
		name: 'green arrow',
		img: 'green-arrow.jpg'
	},
	{
		name: 'green lantern',
		img: 'green-lantern.jpg'
	},
	{
		name: 'ironman',
		img: 'ironman.jpg'
	},
	{
		name: 'spiderman',
		img: 'spiderman.jpg'
	},
	{
		name: 'superman',
		img: 'superman.jpg'
	},
	{
		name: 'the avengers',
		img: 'the-avengers.jpg'
	},
	{
		name: 'thor',
		img: 'thor.jpg'
	}
];

$(document).ready(function () {
	var memoryGame = new MemoryGame(cards);
	memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
	var html = '';
	memoryGame.cards.forEach(function (pic, index) {
		html += '<div class= "card" id="card_' + pic.name + '">';
		html += '<div class="back"';
		html += '    name="' + pic.img + '">';
		html += '</div>';
		html += '<div class="front" ';
		html += 'style="background: url(img/' + pic.img + ') no-repeat">';
		html += '</div>';
		html += '</div>';
	});

	// Add all the div's to the HTML
	document.getElementById('memory_board').innerHTML = html;

	// Bind the click event of each element to a function
	$('.back').on('click', function (e) {
		//cada vez que se hace click en un item azul se ejecuta tod este troncho de code...
		//comprobamos cuántos items hay en el array 'pickedCards', que hemos creado en la función constructora (ver memory.js)
		//si hay 0 items, es decir, si es la 1º vez que pinchamos, entra en el if...
		if (memoryGame.pickedCards.length === 0) {
			//hacemos un push al array 'pickedCards', es decir, añadimos un item al array...
			//el item que estamos añadiendo al array es OJO ATENCIÓN: << $(this).attr('name').split('.')[0] >> Vamos a ver qué mandangas es esto...
			// $(this) es el item sobre el que hemos hecho click, el que recibe el evento del ratón
			//.attr('name') accede al atributo (attr es el short de atributo) llamado 'name' y recoge su valor, en formato de texto
			//.split('.')[0] el valor del atributo name, por circunstancias de esta aplicación es, I.E. :'superman.jpg', con el split descartamos el '.jpg'
			//lo que pusheamos al array es simplemente 'superman' 0 'batman'... ¿Está claro? ¿Se entiende?
			memoryGame.pickedCards.push($(this).attr('name').split('.')[0]);
			//además, al this, el cuadro sobre el que hemos hehco click, le aplicamos la clase CSS 'visible', que permite ver el la img del superhéroe en vez del cuadro azul... BRUJERÍA...
			$(this).addClass('visible');
			//comprobamos de nuevo la longitud del array 'memoryGame.pickedCards'. De este modo sabemos si es la primera vez que se hace click, o la segunda... Si es la segunda vez, la length será 1, y entramos en el else if en vez de en el if...
		} else if (memoryGame.pickedCards.length === 1) {
			//si es la segunda vez que se hace click en una carta para compararlas, bloqueamos el click en el DOM usando CSS y la clase 'blocked', así no se pueden desvelar más cartas hasta que no termina la evaluación
			$('.back').addClass('blocked');
			$('.card').addClass('no-cursor');
			//Igual que hacíamos en el if, mandamos el valor de atributo 'name' al array, ya tenemos dos strings listos para ser evaluados
			memoryGame.pickedCards.push($(this).attr('name').split('.')[0]);
			// e igual que en el if, desvelamos al usuario la carta usando CSS
			$(this).addClass('visible');
			//dentro del else if actual, abrimos una nueva estructura de control
			// en este if evaluamos el return del método 'checkIfPair()'... si el contenido del array 'pickedCards' es igual en sus dos posiciones (recuerda que este array se compone de los attrs 'name' de las casillas donde hemos hecho click) el método devuleve true (mira el memory.js, la fx checkIfPair() ). Si es 'true' entramos dentro del if...
			if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
				//en caso de haber acertado con las cartas, a éstas, a las visibles, les añadimos la clase 'matched', para dejarlas fijas...
				$('.visible').parent().addClass('matched');
				// y después reseteamos las variables de estado del juego para recomenzar la tirada... Recuerda que en este punto ya hay dos cartas destapadas... hay que "empezar de nuevo" y seguir jugando...
				resetTry();
			} else {
				// en caso de que el método 'checkIfPair()' devuelva 'false' (fíjate que estamos en el 'else' del 'if'...) ejecutamos resetTry() pasado medio segundo, gracias al setTimeOut...
				setTimeout(function () {
					resetTry();
				}, 500);
			}
		}

		//en este punto ya hemos salido de la estructura de control principal if/else...
		//Ahora vamos a recuperar los valores de las propiedades del objeto, que hemos seteado antes al llamar al método 'checkIfPair()'...
		//Esos valores los introducimos en el DOM con el método de jQuery '.text()', aunque se podría hacer varias maneras... Y así actualizamos los contadores.
		$('#pairs_clicked').text(memoryGame.pairsClicked);
		$('#pairs_guessed').text(memoryGame.pairsGuessed);

		//ahora invocamos el método finished() del objeto. Si devuelve 'true' es que se han acertado todas las cartas, así que, usando CSS mostramos el div que da a entender que has ganado....
		if (memoryGame.finished()) {
			$('.winning-overlay').fadeIn();
		}

		//RECUERDA QUE TODO HA PASADO EN EL EVENTO 'CLICK' SOBRE CUALQUIER CUADRADO GRIS... Y PASA CADA VEZ QUE HACES CLICK...
	});

	// función auxiliar para no repetir código
	function resetTry() {
		memoryGame.pickedCards = [];
		$('.back').removeClass('blocked visible');
		$('.card').removeClass('no-cursor');
	}

	// si se clicka en el botón del overlay cuando ganas, la página se recarga...
	$('.winning-overlay h1 button').click(function () {
		location.reload();
	});

});