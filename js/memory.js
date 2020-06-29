class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.randomCardsDeck = [];
  }
  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      const j = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

  }
  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true
    } else {
      this.pairsClicked++;
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}