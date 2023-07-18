class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
		// add the rest of the class properties here
	}

	shuffleCards() {
		if (!this.cards) {
			return undefined;
		}

		this.cards.sort((a, b) => {
			return 0.5 - Math.random();
		});

		return this.cards;
	}

	checkIfPair(card1, card2) {
		this.pairsClicked++;
		if (card1 === card2) {
			this.pairsGuessed++;
			return true;
		} else {
			return false;
		}
	}

	checkIfFinished() {
		if (this.pairsGuessed === 12) {
			return true;
		} else {
			return false;
		}
	}
}
