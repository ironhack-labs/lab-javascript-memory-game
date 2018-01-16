var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var newBox = [];
    var totalCards = cardsArr.length;
    for (let i = totalCards; i >= 1;i--){
        var randomCardIndex = Math.floor(Math.random()*i);
        newBox.push(cardsArr[randomCardIndex]);
    }
    return newBox;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
this.pairsClicked++;
if(firstCard.name === secondCard.name){
    this.pairsGuessed++;
    return true;
} 
return false;

};

MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed === this.cards.length/2){
        return true;
    }
    return false;

};
