class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards(cards) {
    //if (cards) {
    console.log(cards);
    return cards;
    //}
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    if (this.cards.length / 2 === this.pairsGuessed) {
      return true;
    }
    return false;
  }
}
