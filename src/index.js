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

memoryGame.shuffleCards()

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
  
  let lastPositions = []

	// Bind the click event of each element to a function
	document.querySelectorAll('.card').forEach((card) => {
		card.addEventListener('click', (e) => {
      card.classList.add('turned');

      let allCards = document.querySelectorAll('.card');
      let positionCard = [];
      for (let i = 0; i < allCards.length; i++) {
				if (allCards[i].getAttribute('class').includes('turned') && !(allCards[i].getAttribute('class').includes('blocked'))) {
					positionCard.push(i);
				}
			}
 
      
      if (positionCard.length === 2) {
			let card1 = allCards[positionCard[0]].getAttribute('data-card-name');
			let card2 = allCards[positionCard[1]].getAttribute('data-card-name');

      if (memoryGame.checkIfPair(card1, card2)) {
        allCards[positionCard[0]].classList.add('blocked')
        allCards[positionCard[1]].classList.add('blocked')
        document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed

      }

      document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked
      }
      
      if (positionCard.length === 3) {
        
        allCards[lastPositions[0]].classList.remove('turned')
        allCards[lastPositions[1]].classList.remove('turned')
      }
      lastPositions = positionCard

      setTimeout(function () {
        if (memoryGame.checkIfFinished()) {
        alert('You have Won the Game')
      }
      },10)
      
      
      

			
		});
	});
});
