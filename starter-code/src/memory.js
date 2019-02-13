var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};



// Copiado de internet

MemoryGame.prototype.shuffleCards = function () {

  for(var i = this.cards.length -1; i > 0; i--) {

  var j = Math.floor(Math.random() * (i + 1));

    var temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;

  }


};



MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked ++

  if(firstCard === secondCard) {

    this.pairsGuessed ++

    return true

  } else {

    return false

  }

}


MemoryGame.prototype.isFinished = function () {

  if(this.pairsClicked === 0) {

    return false

  } else if(this.pairsGuessed === this.cards.length / 2) {

    return true

  } else {

    return false

  }

};

