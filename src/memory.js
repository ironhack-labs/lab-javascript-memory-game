class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    if (this.cards !== false) {
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      [this.cards[i] = this.cards[j]] = [this.cards[j] = this.cards[i]];
    }
    return this.cards
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

  checkIfFinished() {
    if (this.pairsGuessed === 0 || this.pairsGuessed !== this.cards.length / 2) {
      return false
    } else if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }
  }
}
