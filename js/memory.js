class MemoryGame {
	constructor(cards) {
		this.cards = cards

		// add the rest of the class properties here
		this.pickedCards = []
		this.pairsClicked = 0
		this.pairsGuessed = 0
	}
	shuffleCards() {
		for (let i = this.cards.length - 1; i > 1; i--) {
			let j = Math.round(Math.random() * i)
			let tempCard = this.cards[i]
			this.cards[i] = this.cards[j]
			this.cards[j] = tempCard
		}
	}

	checkIfPair(card1, card2) {
		this.pairsClicked++
		if (card1 === card2) {
			this.pairsGuessed += 1
			return true
		}
		return card1 === card2
	}

	isFinished() {
		let isPairsGuest = this.pairsGuessed >= this.cards.length / 2
		return isPairsGuest
	}
}
