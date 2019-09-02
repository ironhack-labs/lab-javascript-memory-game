class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [pickedCards];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards.sort(function () { return 0.5 - Math.random() });
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    else {
      return false;
    }
  }
  isFinished() {
    if (this.cards.length === this.pairsGuessed * 2) {
      return true;
    }
    else {
      return false;
    }
  }
}


