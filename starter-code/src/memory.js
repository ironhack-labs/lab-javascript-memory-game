var MemoryGame = function (cards) {
  //this.cards = this.shuffleCard(cards);
 this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed =0;

};

MemoryGame.prototype.shuffleCard = function (cardsArr) {

    for(var i = 0; i < cardsArr.length; i++){
        cardsArr[i] =  Math.floor(Math.random() * cardsArr.length);
    }
     return cardsArr;  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if(firstCard === secondCard){
        this.pairsGuessed++;
        return true;
}else{
    return false;
}
}

MemoryGame.prototype.finished = function () {
    return this.pairsGuessed > 0 
    && this.pairsGuessed === this.cards.length/2;
};
