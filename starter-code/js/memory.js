class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards = this.pickedCards;
  }
 checkIfPair(card1, card2) {
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {}
}