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

window.addEventListener('load', () => {
	memoryGame.shuffleCards(cards);
	let html = '';
	memoryGame.cards.forEach(pic => {
		html += `<div class="card" data-card-name="${pic.name}">`;
		html += `<div class="back" name="${pic.img}"></div>`;
		html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
		html += `</div>`;
	});

	// Add all the divs to the HTML
	document.querySelector('#memory_board').innerHTML = html;

	// Bind the click event of each element to a function
	document.querySelectorAll('.card').forEach(card => {
		card.addEventListener('click', () => {
			card.classList.add('turned');
			memoryGame.pickedCards.push(card);
			let card1 = memoryGame.pickedCards[0];
			let card2 = memoryGame.pickedCards[1];
			if (memoryGame.pickedCards.length === 2) {
				if (
					memoryGame.checkIfPair(card1.getAttribute('data-card-name'), card2.getAttribute('data-card-name'))
				) {
					card1.classList.add('blocked');
					card2.classList.add('blocked');
					memoryGame.pickedCards = [];
				} else {
					setTimeout(() => {
						card1.classList.remove('turned');
						card2.classList.remove('turned');
						memoryGame.pickedCards = [];
					}, 1000);
				}
			}

			document.getElementById('pairs_clicked').textContent = memoryGame.pairsClicked;
			document.getElementById('pairs_guessed').textContent = memoryGame.pairsGuessed;

			if (memoryGame.isFinished()) {
				setTimeout(() => {
					alert('winning');
				}, 500);
			}
			console.log('Card clicked: ', card);
		});
	});
});
