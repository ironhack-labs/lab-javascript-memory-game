class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
	}

	shuffleCards() {
		//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
		for (let i = 0; i <= this.cards.length - 2; i++) {
			const j = Math.floor(Math.random() * this.cards.length);
			[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
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
		return this.pairsGuessed >= this.cards.length / 2 ? true : false;
	}
}