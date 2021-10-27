class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
	}

	shuffleCards(cards) {
		
		if (!cards) {
			return undefined;
		}

		

		for (let i = cards.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let temp = cards[i];
			cards[i] = cards[j];
			cards[j] = temp;
		}
		return cards;
		
	}

	checkIfPair(card1, card2) {
		
		let name1 = card1
		let name2 = card2

		this.pairsClicked++;
		if (name1 === name2){
			this.pairsGuessed++;
			return true;
		}
		return false;
	}

	checkIfFinished() {
		
		return (this.pairsGuessed === this.cards.length / 2)
		
	}
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
