 var MemoryGame = function (cards) {
  this.cards = cards;
  var pickedCards = [];
  var pairsClicked = 0;
  var pairsGuessed = 0;
  this.pickedCards = pickedCards;
  this.pairsClicked = pairsClicked;
  this.pairsGuessed = pairsGuessed;
};

MemoryGame.prototype.shuffleCards = function () {
  var cardsArray = this.cards;
    for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    
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
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length / 2) { 
    setTimeout(function() { alert("Game over..."); 
  }, 300);  }
};