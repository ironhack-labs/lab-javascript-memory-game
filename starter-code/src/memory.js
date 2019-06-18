class MemoryGame {
	constructor(card) {
		this.cards = cards;
		this.pairsClicked = 0;
		this.pairsGuessed = 0;
		this.pickedCards = [];
	}
	shuffleCards() {
		this.cards.sort(() => Math.random() - 0.5);
	}
	checkIfPair(card1, card2) {
		this.pairsClicked += 1;
		$('#pairs_clicked').text(this.pairsClicked);

		if (card1.data('card-name') === card2.data('card-name')) {
			return true;
		}
		return false;
	}
	isFinished() {
		if (this.pickedCards.length >= 2) {
			if (this.checkIfPair(this.pickedCards[0], this.pickedCards[1])) {
				this.pairsGuessed += 1;
				$('#pairs_guessed').text(this.pairsGuessed);
				this.pickedCards = [];
				if (this.pairsGuessed === 12) {
					alert('You finished the game! \n Starting over now!');
					location.reload();
					return true;
				}
			} else {
				setTimeout(() => {
					$(this.pickedCards[0][0].children[0]).toggleClass('back');
					$(this.pickedCards[0][0].children[0]).toggleClass('front');
					$(this.pickedCards[0][0].children[1]).toggleClass('back');
					$(this.pickedCards[0][0].children[1]).toggleClass('front');
					$(this.pickedCards[1][0].children[0]).toggleClass('back');
					$(this.pickedCards[1][0].children[0]).toggleClass('front');
					$(this.pickedCards[1][0].children[1]).toggleClass('back');
					$(this.pickedCards[1][0].children[1]).toggleClass('front');
					this.pickedCards = [];
				}, 500);
			}
			return false;
		}
	}
}
