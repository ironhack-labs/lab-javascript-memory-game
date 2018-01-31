 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var i = 0;
    var j = 0;
    var temp = null;
    for (i = cardsArr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cardsArr[i];
      cardsArr[i] = cardsArr[j];
      cardsArr[j] = temp;
    }
    return(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if (firstCard === secondCard) {
    this.pairsGuessed ++;
    return true;
  }
  return false;
 }

MemoryGame.prototype.finished = function () {
   if (this.pairsGuessed === 12 ) {
     return true;
     } else {
     return false;
     }
 };
