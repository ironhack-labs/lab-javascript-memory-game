class MemoryGame {
  constructor(cards, pickedCards = [], pairsClicked = 0, pairsGuessed = 0) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
    // add the rest of the class properties here
  }
  shuffleCards() {

  }

  checkIfPair(card1, card2) {
    this.card1 = card1;
    this.card2 = card2;
    this.pairsClicked = this.pairsClicked + 1;
    if (this.card1 === this.card2) {
      this.pairsGuessed = this.pairsGuessed + 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed < 8) {
      return false;
    } else if (this.pairsGuessed = 8) {
      return true;
    }

  }
}