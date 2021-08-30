const cards = [
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' },
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
	memoryGame.shuffleCards();
	let html = '';
	memoryGame.cards.forEach((pic) => {
		html += `
		<div class="card" data-card-name="${pic.name}">
		  <div class="back" name="${pic.img}"></div>
		  <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
		</div>
	  `;
	});

	// Add all the divs to the HTML
	document.querySelector('#memory-board').innerHTML = html;

	// Bind the click event of each element to a function
	document.querySelectorAll('.card').forEach((card) => {
		card.addEventListener('click', () => {

			// cada vez que elegimos carta, push pickedCards + agregar class cardturned
			const pairsClicked = document.getElementById('pairs-clicked');
			const pairsGuessed = document.getElementById('pairs-guessed');

			//if (memoryGame.pickedCards.length < 2) {
				card.classList.add('turned');
				memoryGame.pickedCards.push(card);

			//si longitud de pickedCards = 2, ejecutar checkIfPair() 
			if (memoryGame.pickedCards.length === 2) {
	
				let element1 = memoryGame.pickedCards[0];
				let element2 = memoryGame.pickedCards[1];

				let name1 = element1.getAttribute('data-card-name');
				let name2 = element2.getAttribute('data-card-name');

				let success = memoryGame.checkIfPair(name1, name2);
				//si checkIfPair === true, añadir clase blocked (No esta en el CSS??) a las dos cartas
				if (success === true) {
					memoryGame.pickedCards = [];
				} else {
					setTimeout(() => {
						element1.classList.remove('turned');
						element2.classList.remove('turned');
						memoryGame.pickedCards = [];
					}, 1000);
				}
				//preparar array para la siguiente ejecucion, vaciar --> hemos seleccionado el par
				memoryGame.pickedCards = [];
  
				pairsClicked.innerHTML = memoryGame.pairsClicked;
				pairsGuessed.innerHTML = memoryGame.pairsGuessed;

				let completado = checkIfFinished ();

				//mensaje de juego completado
				if (completado && (memoryGame.pairsClicked < 48)){
                    alert(`Wow, only ${memoryGame.pairsClicked} movements! Congratulations!`)
                    alert("This alert contains a genuine Marvel Comics NO-PRIZE which you have just won!");
                } else if (completado) {
                    alert(`Wow, ${memoryGame.pairsClicked} movements... You should work that memory!`);
                }
			  }
		  });
	  });
  });