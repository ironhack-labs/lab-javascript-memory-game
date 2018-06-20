var MemoryGame = function (cards) {
        this.cards = cards;
        this.pickedCards = [];
        this.pairsClicked = 0;
        this.pairsGuessed = 0;
        
    };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    this.cards = _.shuffle(cardsArr);
    return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked ++;
    if(firstCard == secondCard){
       
        this.pairsGuessed ++;
        return true;
    }else{
        return false;
    }

}

MemoryGame.prototype.finished = function () {
    return false;
    if(this.pairsGuessed === 12){
        alert('OMG');
        return true;
    }

};
