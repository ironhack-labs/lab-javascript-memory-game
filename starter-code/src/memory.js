var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    this.cards = _.shuffle(cardsArr);
    return _.shuffle(cardsArr);

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
    if(this.pairsGuessed > 11){
        alert("Winner!");
    }
};

