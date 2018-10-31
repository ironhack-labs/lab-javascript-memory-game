function MemoryGame(cards) {
  
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {

  var currentIndex = this.cards.length, t, randomIndex;
  

  // While there remain elements to shuffle…
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex-=1;

    // And swap it with the current element.
    t = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = t;
  }
  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if (firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  } 
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length/2) {
    return true;
  } return false;
};