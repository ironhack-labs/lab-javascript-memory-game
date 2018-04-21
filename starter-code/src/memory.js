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
    var pairCount = ((this.cards).length);
 
    if(this.pairsGuessed == 0 ){
        if(this.pairsClicked == 0){
            return false;
        }
    }

    if(this.pairsGuessed === pairCount){
        return true;
    }else{
        return false;
    }

    return true;

};

