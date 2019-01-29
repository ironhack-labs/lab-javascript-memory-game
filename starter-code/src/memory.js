var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for(var i = MemoryGame.cards.length - 1; i > 0; i--){
    var j = Math.floor(Math.random()* (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  console.log(this.pairsClicked);
  if(firstCard === secondCard){
    this.pairsGuessed += 1;
    return true;
  }
  else{
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed<8){
    return false;
  }
  else {
    return true;
  }

};