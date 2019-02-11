class MemoryGame{
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(){
    let shuffledCards = [];
    while(this.cards.length > 0){
      shuffledCards.push(this.cards.splice(Math.floor(Math.random() * this.cards.length), 1));
    }
    this.cards = shuffledCards;
  }

  checkIfPair(firstCard, secondCard){
    this.pairsClicked++;
    if(firstCard == secondCard){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  
  isFinished(){
    return this.pairsGuessed == this.cards.length / 2;  
  }
}





/*
var MemoryGame = function (cards) {
  this.cards = cards;
};

MemoryGame.prototype.shuffleCards = function () {
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};
 */