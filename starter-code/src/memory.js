var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var newArray = cardsArr;
    for (var i = newArray.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = newArray[randomIndex]; 
         
        newArray[randomIndex] = newArray[i]; 
        newArray[i] = itemAtIndex;
    }
    
    return newArray;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked ++;
    if (firstCard === secondCard) {
        this.pairsGuessed ++;
        return true;
    } else {
        return false;
    }
}

MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed === 12) {
        return true;
    } else {
        return false;
    }
};
