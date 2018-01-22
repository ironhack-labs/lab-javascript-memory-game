var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = [];
  this.pairGuessed = [];
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var copyArr = cardsArr.slice();
    var shuffledArr = [];
    while(copyArr.length>0){
        var ranNum = Math.floor(Math.random() * copyArr.length);
        var el = copyArr.splice(ranNum,1)[0];
        shuffledArr.push(el);
    }

    return shuffledArr;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked.push(1);
    if(firstCard === secondCard){
        this.pairGuessed.push(1);
        return true;
    }
    else {
        return false;
    }
}

// MemoryGame.prototype.finished = function () {

// };
