var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var suffledArray = [];
  while (this.cards.length > 0){
    var index = Math.floor(Math.random()*this.cards.length);
    suffledArray.push(this.cards[index]);
    this.cards.splice(index, 1)
  }
  this.cards = suffledArray;
  return 
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard){
    this.pairsClicked++;
    this.pairsGuessed++;
    return true;
  }
  if (firstCard != secondCard){
    this.pairsClicked++;
    return false;
  }
};

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length/2){
    return true;
  }
  if(this.pairsGuessed != cards.length/2){
    return false;
  }
};