var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  var shuffledCards = [];

  while (this.cards.length > 0) {
    /*Aplico el mismo método que con los vikings, 
    obtengo aleatoriamente una carta del array cards, 
    para luego ir rellenando el array de cartas barajadas*/
    var cardRandomIndex = Math.floor(Math.random() * this.cards.length); 
    var randomCard = this.cards.splice(cardRandomIndex, 1);
    shuffledCards.push(randomCard);
  }

  this.cards = shuffledCards; 
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  } else {
    return false;
  }
};
