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
	{ name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
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
			if (memoryGame.pickedCards.length < 2) {
				card.classList.toggle('turned');
				memoryGame.pickedCards.push(card);
			}

			if (memoryGame.pickedCards.length === 2) {
				const memoryGame = new MemoryGame(cards);
				const card1data =
					memoryGame.pickedCards[0].getAttribute('data-card-name');
				const card2data =
					memoryGame.pickedCards[1].getAttribute('data-card-name');
				const card1 = memoryGame.pickedCards[0];
				const card2 = memoryGame.pickedCards[1];

				const result = memoryGame.checkIfPair(card1data, card2data);
				memoryGame.pickedCards = [];
				// card.setAttribute('class', 'card turned');
				if (card1data === card2data) {
					card.setAttribute('class', 'card turned');
					console.log('paired!');
					memoryGame.checkIfFinished();
					return result;
				} else if (card1data !== card2data) {
					console.log('not paired!');
					card1.setAttribute('class', 'card');
					card2.setAttribute('class', 'card');
				}
				console.log(`Card clicked: ${card}`);
			}
		});
	});
});

//checkIfFinished.....
