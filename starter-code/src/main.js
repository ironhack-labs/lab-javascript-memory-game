var cards = [
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
]
var memoryGame = new MemoryGame(cards)
memoryGame.shuffleCards()
document.addEventListener('DOMContentLoaded', function(event) {
	var html = ''
	memoryGame.cards.forEach(function(pic) {
		html += '<div class="card" data-card-name="' + pic.name + '">'
		html += '  <div class="first back" name="' + pic.img + '"></div>'
		html += '  <div class="second front" style="background: url(img/' + pic.img + ') no-repeat"></div>'
		html += '</div>'
	})

	// Add all the div's to the HTML
	document.querySelector('#memory_board').innerHTML = html

	const flipCard = elm => {
		elm.parentNode.querySelector('.front').className = 'second back'
		elm.parentNode.querySelector('.back').className = 'first front'
	}

	const flipAllBack = () => {
		document.querySelectorAll('.first').forEach(elm => {
			elm.className = 'first back'
		})
		document.querySelectorAll('.second').forEach(elm => {
			elm.className = 'second front'
		})
	}

	const keepFliped = () => {
		let name = memoryGame.pickedCards[0]
		document.querySelectorAll('.first.front').forEach(elm => {
			if (elm.getAttribute('name') === name) {
				elm.className = 'front'
				elm.parentNode.querySelectorAll('.second.back')[0].className = 'back'
			}
		})
	}

	const finalFlip = () => {
		document.querySelectorAll('.card').forEach(e => {
			e.querySelector('.back').className = 'second front'
			e.querySelector('.front').className = 'first back'
		})
	}

	// Bind the click event of each element to a function
	document.querySelectorAll('.back').forEach(function(card) {
		card.onclick = function(e) {
			flipCard(e.currentTarget)
			memoryGame.pickedCards.push(e.currentTarget.getAttribute('name'))
			if (memoryGame.pickedCards.length === 2) {
				let isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])
				if (isPair) {
					keepFliped()
					memoryGame.pickedCards = []
				} else {
					setTimeout(flipAllBack, 700)
					memoryGame.pickedCards = []
				}
			}
			document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked
			document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed
			if (memoryGame.isFinished()) {
				setTimeout(finalFlip, 700)

				memoryGame.pairsGuessed = 0
				memoryGame.pairsClicked = 0
				memoryGame.shuffleCards()
			}
		}
	})
})
