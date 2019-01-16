var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
    let t;
    for(let i = this.cards.length - 1;i > 0; i -= 1){
     let j = Math.floor(Math.random() * i); 
     t = this.cards[i];
     this.cards[i] = this.cards[j];
     this.cards[j] = t;
    }

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
        this.firstCard = firstCard;
        this.secondCard = secondCard;
        this.pairsClicked += 1;
        if(this.firstCard === this.secondCard){
          this.pairsGuessed += 1;
          return true;
        }
        return false;
}

MemoryGame.prototype.isFinished = function () {
        if(this.pairsGuessed === 8) return true;
        return false;
};