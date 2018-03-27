 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards  = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
 };

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
    for (var i = 0; i<cardsArr.length;i++) {
        var j = Math.random(cardsArr[j] = cardsArr[i]); 
    }
    return cardsArr;
 };

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if(firstCard == secondCard){
      this.pairsGuessed += 1;
      return true;
  } else{
     return false;
  }
 }

 MemoryGame.prototype.finished = function () {
    if(this.pairsGuessed == 12){
        return true;
    }else {
        return false;
    }
 };
