var MemoryGame = function (cards) {
    this.cards = this.shuffleCard(cards);
    this.cards=cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
}

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var temp=null;
    var swap;
      for(var i=cardsArr.length-1; i>0; i--){
          swap=Math.floor(Math.random()*i);
          temp=cardsArr[i];
          cardsArr[i]=cardsArr[swap];
          cardsArr[swap]=temp;
      }
      return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if(firstCard===secondCard){
        this.pairsGuessed++;
        return true;
    }
    else{
        return false;
    }

}

 MemoryGame.prototype.finished = function () {
    if(this.pairsGuessed===12){
        return true;
    }
    else{
        return false;
    }
};
