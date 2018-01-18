'use strict'


var MemoryGame = function (cards) {
 this.cards = cards;
 this.pickedCards = [];
 this.pairsClicked = 0;
 this.pairsGuessed = 0;
 
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var newArr = cardsArr;
   
   for (var i = newArr.length-1; i >=0; i--) {
   
       var randomIndex = Math.floor(Math.random()*(i+1));
       var itemAtIndex = newArr[randomIndex];
       
       newArr[randomIndex] = newArr[i];
       newArr[i] = itemAtIndex;
   }

return newArr;
 };

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked ++;
    if (firstCard === secondCard) {
        this.pairsGuessed++
        return true;
     } else {
        return false;
    }
}
 


MemoryGame.prototype.finished = function () {
if (this.pairsGuessed === 12){
    return true;
} else {
    return false;
}
};


