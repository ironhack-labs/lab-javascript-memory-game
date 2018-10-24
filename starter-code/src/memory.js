var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = pickedCards;
  this.pairsClicked = pairsClicked;
  this.pairsGuessed = pairsGuessed;
};

MemoryGame.prototype.shuffleCards = function() {
  let randomNumber, exchange;
  for(let count = this.cards.length-1; count > 1; count --) {
    randomNumber = Math.floor(Math.random() * this.cards.length);
    while(randomNumber < 0 || randomNumber > this.cards.length)
    {
      randomNumber = Math.floor(Math.random() * this.cards.length);
    }
    exchange = this.cards[randomNumber];
    this.cards[randomNumber] = this.cards[count];
    this.cards[count] = exchange;
  }
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  pairsClicked += 1;
  if(firstCard === secondCard) {
    pairsGuessed += 1;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  if(pairsGuessed === 0) {
    return false;
  }
  if(pairsGuessed === 8) {
    return true;
  } else {
    return false;
  }
};
 