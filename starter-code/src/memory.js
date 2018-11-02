class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {}

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked += 1;
    if (firstCard === secondCard) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    return (this.pairsGuessed === this.cards.length/2);
  }
}
