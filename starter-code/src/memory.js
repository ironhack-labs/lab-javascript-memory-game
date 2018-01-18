var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = []; //Needs it's value
   this.pairsClicked = 0; //Wrong
   this.pairsGuessed = 0; //Wrong
 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var cardsArrShuffled = [];
    //var cardsArr = cardsArr;

    var j = 1;
    for (i = cardsArr.length; i > 0; i--) {
        j = Math.floor(Math.random() * Math.floor(i));
        cardsArrShuffled.push(cardsArr[j]);
    }

    return cardsArrShuffled;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    var self = this;
    self.pairsClicked++;
    if (firstCard === secondCard) {
        this.pairsGuessed++;
        return true;
    } else if (firstCard !== secondCard) {
        return false;
    }
}

MemoryGame.prototype.finished = function () {
    var self = this;
    if (self.pairsGuessed === 0) {    
        return false;
    } else if ((self.cards.length/2) < self.pairsGuessed) {
        return false;
    } else if ((self.cards.length/2) === self.pairsGuessed) {
        return true;
    } else {
        return false;
    }
};
