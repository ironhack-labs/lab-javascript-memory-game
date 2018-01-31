var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var j, temp;
  for (var i = cardsArr.length - 1; i > 0; i--){
     j = Math.floor(Math.random() * (i + 1));
     temp = cardsArr[i];
     cardsArr[i] = cardsArr[j];
     cardsArr[j] = temp;
   }
    return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

}

MemoryGame.prototype.finished = function () {

};
