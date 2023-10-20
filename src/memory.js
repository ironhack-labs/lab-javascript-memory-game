class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } else {
      let cardsShuffled = this.cards.sort(() => Math.random() - 0.5);
      return cardsShuffled;
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else if (card1 !== card2) {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 0 || this.pairsGuessed !== this.cards.length / 2) {
      return false;
    } else if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
  }
}