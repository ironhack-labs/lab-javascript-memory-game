class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
	}

	shuffleCards() {
		//BONUS
	}

	checkIfPair(card1, card2) {
		if (card1 === card2) {
			this.pairsGuessed++;
			this.pairsClicked += 1;
			return true;
		} else if (card1 !== card2) {
			this.pairsClicked += 1;
			return false;
		}
	}

	checkIfFinished() {
		if (this.pairsGuessed < 8) {
			return false;
		} else if (this.pairsGuessed === 0) {
			return false;
		} else if (this.pairsGuessed === 8) {
			return true;
		}
	}
}
