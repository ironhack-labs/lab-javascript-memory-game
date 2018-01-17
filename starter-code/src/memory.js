var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
	  var shuff = [], n = this.cards.length, i;

	  while (n) {

	    i = Math.floor(Math.random() * n--);

	    shuff.push(this.cards.splice(i, 1)[0]);
	  }

	  return shuff;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
	
	this.pairsClicked += 1;

	if (firstCard === secondCard){

		this.pairsGuessed += 1;

		return true;

	}else{

		return false;
	}

}

MemoryGame.prototype.finished = function () {

	if (this.pairsGuessed === 12){

		return true;

	}

	else{

		return false;
	}

};
