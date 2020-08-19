class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if(card1 === card2) {
      this.pairsGuessed ++;
      return true;
    }
    return false;
  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2) {
      alert('You won!');
      return true;
    }
    return false;
  }
}
