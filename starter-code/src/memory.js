
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCard = function (cardsArr) {
  for(var i = 0; i<cardsArr.length-1; i++){
    var random = Math.floor(Math.random()*cardsArr.length)
    var elem = cardsArr[i];
    cardsArr[i] = cardsArr[random]
    cardsArr[random] = elem;
  }
  return cardsArr;

};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard == secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
}


MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed == 0){
    return false;
  }
  return this.pairsGuessed == cards.length/2;
};
