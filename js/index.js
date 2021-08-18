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
	let html = '';
	memoryGame.shuffleCards();
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
			// TODO: write some code here

			// cada vez que elegimos carta, push pickedCards + agregar class cardturned
			//let thisCard = JSON.parse(JSON.stringify(card));
			const pairsClicked = document.getElementById('pairs-clicked');
			const pairsGuessed = document.getElementById('pairs-guessed');

			if (memoryGame.pickedCards.length < 2) {
				card.classList.add('turned');
				memoryGame.pickedCards.push(card);
			}

			//si longitud de picketCards = 2, ejecutar checkIfPair() y pairsclicked ++
			if (memoryGame.pickedCards.length === 2) {
				let element1 = memoryGame.pickedCards[0];
				let element2 = memoryGame.pickedCards[1];

				let name1 = element1.getAttribute('data-card-name');
				let name2 = element2.getAttribute('data-card-name');

				let success = memoryGame.checkIfPair(name1, name2);
				//si checkIfPair === true, añadir clase blocked a las dos cartas y pairGuessed++
				if (success === true) {
					memoryGame.pickedCards = [];
				} else {
					//card.className = 'card';
					setTimeout(() => {
						element1.classList.remove('turned');
						element2.classList.remove('turned');
						memoryGame.pickedCards = [];
					}, 1000);
				}
				//element1.classList.remove("turned")
				pairsClicked.innerHTML = memoryGame.pairsClicked;
				pairsGuessed.innerHTML = memoryGame.pairsGuessed;
			}

			if (memoryGame.checkIfFinished()) {
				const audio = document.querySelector('audio');
				let button = document.getElementById('score');
				const newButton = document.createElement('button');
				newButton.classList = 'btn btn-success';
				newButton.innerHTML = 'Refresh page';
				newButton.setAttribute('onclick', 'window.location.reload();');
				button.appendChild(newButton);
				audio.play();
			}
		});
	});
});
