var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    this.cardsArr = cardsArr;
    this.newArr = [];
    this.newArr.push(Math.floor(Math.random() * this.cardsArr.length));
    return this.newArr;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
this.firstCard = firstCard;
this.secondCard = secondCard;
this.pairsClicked++;
if (firstCard === secondCard) {
    this.pairsGuessed++;
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
