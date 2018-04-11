var MemoryGame = function (cards) {
this.cards = cards;
this.pickedCards = [];
this.pairsClicked = 0;
this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var currentIndex = cardsArr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = cardsArr[currentIndex];
      cardsArr[currentIndex] = cardsArr[randomIndex];
      cardsArr[randomIndex] = temporaryValue;
    }
  
    return cardsArr;
 };

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    if(firstCard === secondCard){
        this.pairsClicked ++;
        this.pairsGuessed ++;
        return true;
    }else{
        this.pairsClicked ++;
        return false;
    }

}

MemoryGame.prototype.finished = function () {
    if(this.cards.length===0){
        return false;
    }
    if(this.pairsGuessed === this.cards.length/2){
        return true;
    }
    return false;
};
