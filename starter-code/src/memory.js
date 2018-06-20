 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
   };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    return _.shuffle(cardsArr);
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    var that = this;
    if (firstCard == secondCard) {
    that.pairsGuessed++;
    that.pairsClicked++; 
    return true;
     } else {
        that.pairsClicked++;
         return false; 
     }
    
};

MemoryGame.prototype.finished = function () {
    if (this.pairsClicked == 0) {
        return false;
    } else if (this.pairsGuessed == 12) {
        return true;
    } else {
        return false;
    }
};

