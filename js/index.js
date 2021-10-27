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
memoryGame.shuffleCards(cards);


function blockCards(){

	let turnedCards = document.querySelectorAll('.flipped')
	turnedCards.forEach(card => {
		card.classList.add('blocked')
	})
}

function reTurnCards(){

	let turnedCards = document.querySelectorAll('.flipped')
	console.log(turnedCards);
	turnedCards.forEach(card => {
		if (!card.classList.contains('blocked')){
			card.classList.remove('turned')
			card.classList.remove('flipped')
		}
	})
}

function updateScore(){
	const clicked = document.getElementById("pairs-clicked");
	const guessed = document.getElementById("pairs-guessed")

	clicked.innerHTML = memoryGame.pairsClicked;
	guessed.innerHTML = memoryGame.pairsGuessed;
}

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

	let selectedCards = [];

	// Add all the divs to the HTML
	document.querySelector('#memory-board').innerHTML = html;

	// Bind the click event of each element to a function
	document.querySelectorAll('.card').forEach((card) => {
		card.addEventListener('click', () => {
			
				
			
				card.classList.add('turned');
				card.classList.add('flipped');
				selectedCards.push(card.getAttribute('data-card-name'));
			
			setTimeout(function(){

				if (selectedCards.length == 2) {
					if (memoryGame.checkIfPair(selectedCards[0], selectedCards[1]) === true) {
						console.log('son iguales');
						blockCards();
						selectedCards.splice(0);
					}
					else {
						console.log('no son iguales');
						reTurnCards();
						selectedCards.splice(0);
					}
				}
				updateScore();
				if (memoryGame.checkIfFinished()) {
					alert('YOU WON!!')
				}

			}, 1500);

			
		
			
			console.log(`Card clicked: ${card}`);
		});
	});
});
