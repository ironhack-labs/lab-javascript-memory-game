class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (var i = this.cards.length; i > 0; i--) {
      var j = Math.floor(Math.random()*(i--));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    else {
      return false
    }
  }
  isFinished() {
    if(this.pairsGuessed < this.cards.length/2) {
      return false;
    }
    else {
      return true
    }
  }
}