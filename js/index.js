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

window.addEventListener('load', event => {
	memoryGame.shuffleCards()
	let html = '';
	memoryGame.cards.forEach(pic => {
		html += `<div class="card" data-card-name="${pic.name}">`;
		html += `<div class="back" name="${pic.img}"></div>`;
		html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
		html += `</div>`;
	});

	// Add all the divs to the HTML
	document.querySelector('#memory-board').innerHTML = html;

	// Bind the click event of each element to a function
	document.querySelectorAll('.card').forEach(card => {
		card.addEventListener('click', () => {

			// TODO: write some code here
			console.log(`Card clicked: ${card}`);
			
			turnCard(card)

			memoryGame.pickedCards.push(card)

			pickLogic()
			
		});
	});
});


const updatePairsClicked = () => document.querySelector("#pairs-clicked").innerHTML++


const updatePairsGuessed = () => {
	
	document.querySelector("#pairs-guessed").innerHTML++

	memoryGame.pickedCards.forEach(card => card.classList.toggle("blocked", true))
}

const turnCard = (card) => {
	console.log("turning class on/off")
	card.classList.toggle("turned", true)
}


const pickLogic = () => {

	if (memoryGame.pickedCards.length === 2) {

		updatePairsClicked()

		// Esta forma era mas corta, pero me he pasado a la de abajo para asegurar una mayor legibilidad de código
		// if(memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), memoryGame.pickedCards[1].getAttribute("data-card-name")))

		let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
		let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")

		if (memoryGame.checkIfPair(card1, card2)) {

			updatePairsGuessed()
			memoryGame.pickedCards = []

		} else {

			setTimeout(() => {
				memoryGame.pickedCards.forEach(card => card.classList.toggle("turned"))
				memoryGame.pickedCards = []
			}, 750)
		}

		if (memoryGame.isFinished()) {
			setTimeout(() => alert("FINISHED, YAY!"), 1000)
		}
	}
}