 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [ ];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
 };

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
    for (var i = 0; i<cardsArr.length; i++) {
        var t = Math.floor(Math.random()*cardsArr.length);
        var w = cardsArr[i];
        cardsArr[i] = cardsArr[t];
        cardsArr[t] = w;
    }
    return cardsArr;
 };

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++
    if(firstCard === secondCard){
        this.pairsGuessed++
        return true
    } else {
        return false
    }
}

 MemoryGame.prototype.finished = function () {
     if (this.pairsGuessed === 12 ) {
        return true
     } else {
         return false
     }
 };
