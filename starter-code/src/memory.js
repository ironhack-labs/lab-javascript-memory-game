var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = cards;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};
MemoryGame.prototype.shuffleCard = function (cardsArr) {
        var m = cardsArr.length, t, i;
        while (m) {
      
          i = Math.floor(Math.random() * m--);
      
          t = cardsArr[m];
          cardsArr[m] = cardsArr[i];
          cardsArr[i] = t;
        }
      
        return cardsArr;
      }

    



MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked ++
    if (firstCard === secondCard){ 
        this.pairsGuessed ++
        return true
    }
    else {return false}
    }





MemoryGame.prototype.finished = function () {
if (this.pairsGuessed === 12){
    return true
}
else {
    return false
}
};
