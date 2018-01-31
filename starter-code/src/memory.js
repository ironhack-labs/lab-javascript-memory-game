var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var newArra= [];
    var length = cardsArr.length;
    var random = 0;
    for (var i=0; i<length; i++){
        random = Math.floor(Math.random()*(cardsArr.length));
        newArra.push(cardsArr[random]);
        cardsArr.splice(random, 1);
    }
    return newArra;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard===secondCard){
        this.pairsGuessed++;
        return true;
    } else {
        return false;
    }
}

MemoryGame.prototype.finished = function () {
    console.log(this.cards.length);
    console.log(this.cards);
    console.log(this.pairsGuessed);
    if (this.cards.length===0){
        return false;
    }
    if (this.pairsGuessed === this.cards.length/2){
        return true;
    } else{
        return false;
    }
};
