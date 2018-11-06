var MemoryGame = function (cards) {
	this.cards = cards;	
	this.pickedCards = [];
	this.pairsClicked = 0;
	this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {	
		var currentIndex = this.cards.length,
			array = this.cards,
			temporaryValue,
			randomIndex
	
		while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}		
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
	this.pairsClicked ++;
	if (firstCard === secondCard) {
		this.pairsGuessed += 1;		
		return true;		
	} else {		
		return false;
		
	}	
};

MemoryGame.prototype.isFinished = function () {
	if (this.pairsGuessed === this.cards.length / 2) { setTimeout(function() { alert("Game over..."); }, 300);  }
};
