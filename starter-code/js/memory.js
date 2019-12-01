class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
	}

	shuffleCards() {
		if (!this.cards) return undefined;

		for (let i = 0; i < this.cards.length; i++) {
			let j = Math.floor(Math.random() * (i + 1));
			let card = this.cards[i];
			this.cards[i] = this.cards[j];
			this.cards[j] = card;
		}
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
	isFinished() {
		return this.pairsGuessed === this.cards.length / 2;
	}
}
