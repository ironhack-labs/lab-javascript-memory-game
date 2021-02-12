class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // shuffle(this.cards);
  }

  checkIfPair(card1, card2) {
    if (card1 !== card2) {
      this.pairsClicked += 1;
      return false;
    } else if (card1 === card2) {
      this.pairsGuessed += 1;
      this.pairsClicked += 1;
      return true;
    }
  }

  isFinished() {
    if (this.pairsGuessed === 8) {
      return true;
    } else {
      return false;
    }
  }
}