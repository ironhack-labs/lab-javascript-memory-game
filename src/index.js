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
memoryGame.shuffleCards();
window.addEventListener('load', event => {
	let html = '';
	memoryGame.cards.forEach(pic => {
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
	document.querySelectorAll('.card').forEach(card => {
		card.addEventListener('click', () => {
			card.classList.add('turned');

			let turnedCards = document.querySelectorAll(
				'.turned:not(.blocked)'
			);
			console.log(turnedCards);
			if (turnedCards.length === 2) {
				let isPair = memoryGame.checkIfPair(
					turnedCards[0].dataset.cardName,
					turnedCards[1].dataset.cardName
				);
				if (isPair) {
					turnedCards.forEach(card => card.classList.add('blocked'));
					let endGame = memoryGame.checkIfFinished();
					if (endGame) {
						setInterval(() => {
							alert('YOU WON');
						}, 700);
					}
				} else {
					//! Sin el setInterval, le quita la clase turned ANTES de mostrar la carta en sí
					//! Con el setInterval, por alguna razón las cards a
					//! las ques les das la vuelta una vez, se comportan de forma muy extraña
					// setInterval(() => {
					turnedCards.forEach(eachCard =>
						eachCard.classList.remove('turned')
					);
					// turnedCards[0].classList.remove('turned');
					// turnedCards[1].classList.remove('turned');
					// }, 500);
				}
			}

			document.querySelector('#pairs-clicked').innerText =
				memoryGame.pairsClicked;
			document.querySelector('#pairs-guessed').innerText =
				memoryGame.pairsGuessed;
		});
	});
});
