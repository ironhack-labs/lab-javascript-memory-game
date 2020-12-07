class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // 2.1 Fisher-Yates Shuffle
  }

  checkIfPair(card1, card2) {
    // if (this.pickedCards.length <= 1) {
    //   return null;
    // }
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}