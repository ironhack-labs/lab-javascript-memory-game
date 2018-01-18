var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCard = function(cardArr) {
    var i = cardArr.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = cardArr[j];
        cardArr[j] = cardArr[i];
        cardArr[i] = temp;
    }
    return cardArr;
}



MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard ){
        this.pairsGuessed++;
        return true;
    } else {
        return false;
    }
}


MemoryGame.prototype.finished = function () {
    var pairs = this.cards.length / 2;
    if (this.pairsGuessed === pairs){
        return true;
    } 
    else {
        return false;
    }
};