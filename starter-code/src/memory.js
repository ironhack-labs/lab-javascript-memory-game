var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards=[];
   this.pairsClicked=0;
   this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    for(var i=0;i<cardsArr.length-1;i++){
        var random=Math.floor(Math.random()*cardsArr.length)
        var e=cardsArr[i];
        cardsArr[i]=cardsArr[random];
        cardsArr[random]=e;

    }
    return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    ++this.pairsClicked;
    if(firstCard==secondCard){
        this.pairsGuessed++;
        return true;
    }else
        return false;
}

MemoryGame.prototype.finished = function () {
    if(this.cards.length<2)
        return false;
   if(this.pairsGuessed==this.cards.length/2)
        return true;
    return false;
};
