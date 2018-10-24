var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for(let i = 0; i < this.cards.length; i+=1){
    let j = Math.floor(Math.random() * this.cards.length);
    let randomElement = this.cards[j];
    let currentElement = this.cards[i];
    this.cards[i] = randomElement;
    this.cards[j] = currentElement;
  }
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if(firstCard === secondCard){
    this.pairsGuessed +=1;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {

  if(this.pairsGuessed === 12) {
    return true
  }
  return false
};