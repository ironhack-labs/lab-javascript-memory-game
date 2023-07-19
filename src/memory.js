class MemoryGame {
  constructor(cards, pickedCards = [], pairsClicked = 0, pairsGuessed = 0) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  }
  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else {
      this.cards.sort(() => Math.random() - 0.5)
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  }
}
