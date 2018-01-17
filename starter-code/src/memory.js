var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var currentIndex = cardsArr.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardsArr[currentIndex];
        cardsArr[currentIndex] = cardsArr[randomIndex];
        cardsArr[randomIndex] = temporaryValue;
    }
    return cardsArr;
};


// Fisher-Yates
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;
  
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
  
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
  
//     return array;
//   }




MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked += 1;
    if (firstCard === secondCard) {
        this.pairsGuessed += 1;
        return true;
    } else {
        return false;
    }
}

MemoryGame.prototype.finished = function () {
    this.nrPairs = this.pickedCards.length / 2;
    if (this.nrPais === this.pairsGuessed) {
        return true;
    } else {
        return false;
    }
};
