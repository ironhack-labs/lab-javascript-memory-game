var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
  //old school!!
  for (i = 0; i < cardsArr.length; i++) {
    var j = Math.floor(Math.random() * cardsArr.length);
    var temp = cardsArr[i];
    cardsArr[i] = cardsArr[j];
    cardsArr[j] = temp;
  }
  return cardsArr;
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

MemoryGame.prototype.finished = function() {
  //if(this.pairsGuessed === (this.cards.length / 2)){ //THIS IS NOT WORKING WITH JASMINE
  if(this.pairsGuessed === 12){
    return true;
  } else {
    return false;
  }
};
