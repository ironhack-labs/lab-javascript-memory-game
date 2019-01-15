class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }
  shuffleCards() {
    var shuffled = [];
    var arrLength = this.cards.length
    for(var i = 0; i< arrLength; i++) {
      shuffled.push(this.cards
        .splice(Math.floor(Math.random() * this.cards.length),1)[0]);
    }
    this.cards = shuffled;
  }
  checkIfPair(firstCard, secondCard) {
    this.pairsClicked += 1;
    if(firstCard === secondCard) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if(this.pairsClicked < (this.cards.length/2)) {
      return false;
    } else {
      return true;
    }
  }
};
