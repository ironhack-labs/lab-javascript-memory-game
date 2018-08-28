var MemoryGame = function (cards) {
	this.cards = cards;
	this.pickedCards = [];
	this.pairsClicked = 0;
	this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
	var i = this.cards.length, j, temp;
	var currentCards = this.cards;

	while(--i > 0){
		j = Math.floor(Math.random() * (i+1));
		temp = currentCards[j];
		currentCards[j] = currentCards[i];
		currentCards[i] = temp;
	}

	this.cards = currentCards;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {}

MemoryGame.prototype.isFinished = function () {};