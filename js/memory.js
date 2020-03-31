class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = []
		this.pairsClicked = 0
		this.pairsGuessed = 0
	}
	shuffleCards() {
		let cardsArr = [...this.cards]
		console.log(cardsArr)
		if (!cardsArr) {
			return undefined
		}
		// Fisher-Yales Shuffle (In-Out Version)
		let randomIndex
		for (let i = 0; i < cardsArr.length; i++) {
			randomIndex = Math.floor(Math.random() * i)
			if (randomIndex != i) {
				this.cards[i] = this.cards[randomIndex]
			}
			this.cards[randomIndex] = cardsArr[i]
		}
		console.log("before", cardsArr)
		console.log("after", this.cards)
		return this.cards
	}

	// Jasmine no me pasa todos los tests ni aunque copie directamente la solución de StackOverflow que han pasado por Slack.
	// Tras hablarlo con Fran, cabe la posibilidad de que el test tenga un pequeño fallo. En una spec te pide que tenga argumento, y en otra ejecuta el test sin argumento.
	// No obstante, el juego tiene un comportamiento correcto.
	// shuffleCards(cardsArr) {
	// 	if (!cardsArr) {
	// 		return undefined
	// 	}

	// 	for (let i = this.cards.length - 1; i > 0; i--) {
	// 		let j = Math.floor(Math.random() * (i + 1));
	// 		let temp = cardsArr[i];
	// 		cardsArr[i] = cardsArr[j];
	// 		cardsArr[j] = temp;
	// 	}
	// 	return cardsArr;
	// }
	
	checkIfPair(card1, card2) {

		this.pairsClicked++

		if (card1 === card2) {

			this.pairsGuessed++
			return true

		} else {			
			return false
		}
	 }
	isFinished() {

		if (this.pairsGuessed === (this.cards.length / 2)) {
			this.printFinished()
			return true
		} else {
			return false
		}

		// No entiendo por qué el ternario no pasa Jasmine en este caso
		// (this.pairsGuessed === (this.cards.length / 2)) ? true : false
	}

	printFinished() {

		const container = document.createElement("div")
		container.setAttribute("id", "finishedGameContainer")
		const h1 = document.createElement("h1")
		h1.innerHTML = "ENHORABUENA, HAS COMPLETADO EL JUEGO!"
		container.appendChild(h1)
		document.querySelector("body").appendChild(container)
	}














}



