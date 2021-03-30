class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
		this.shuffleCards();
	}

	shuffleCards() {
		// https://stackoverflow.com/a/2450976/6279885
		// I have adapted this code from this link

		let currentIndex = this.cards.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[randomIndex];
			this.cards[randomIndex] = temporaryValue;
		}

	}

	checkIfPair(card1, card2) {
		this.pairsClicked++;

		if (card1 === card2) {
			this.pairsGuessed++;
			return true;
		}

		return false;
	}

	isFinished() {
		if (this.pairsGuessed === this.cards.length / 2) {
			return true;
		}

		return false;
	}
}