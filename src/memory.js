class MemoryGame {
	constructor(cards) {
		this.cards = cards;
		// add the rest of the class properties here
		this.pickedCards = [];
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
		this.shuffleCards();
	}

	shuffleCards() {
		// ... write your code here

		if (!this.cards) {
			return undefined;
		}
		/* 
		for (let i = this.cards.length; i > 0; i--) {
			const randomNum = Math.floor(i * Math.random());
			const tempNum = this.cards[randomNum];
			this.cards[randomNum] = this.cards[i - 1];
			this.cards[i - 1] = tempNum;
		} */

		return this.cards.sort(() => Math.random() - 0.5);
	}

	checkIfPair(card1, card2) {
		// ... write your code here
		this.pairsClicked += 1;
		if (card1 === card2) {
			this.pairsGuessed++;
			this.checkIfFinished();
			return true;
		} else {
			return false;
		}
	}

	checkIfFinished() {
		// ... write your code here
		if (this.pairsGuessed === 12) {
			setTimeout(() => {
				alert("CONGRATULATIONS!");
			}, 500);
			return true;
		} else {
			return false;
		}
	}
}
