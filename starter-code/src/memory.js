var MemoryGame = function(cards) {
  this.cards = this.shuffleCard(cards);
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
  // Method: https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
  for(var i = cardsArr.length - 1; i > 1; i--) {
    var randomIndex = Math.floor(Math.random()*i);
    var aux = cardsArr[i];
    cardsArr.splice(i, 1, cardsArr[randomIndex]);
    cardsArr.splice(randomIndex, 1, aux);
  }
  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if( firstCard == secondCard ) {    
    this.pairsGuessed++;
    return true;
  }
  return false;
};

MemoryGame.prototype.finished = function() {
  if(this.pairsGuessed == 0) {
    return false;
  } else if(this.pairsGuessed == (this.cards.length / 2) ) {
    return true;
  } 
  return false;
};
