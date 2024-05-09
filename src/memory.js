class MemoryGame {
  constructor(cards) {
    this.cards = cards || [];
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  addPickedCard(cardName) {
    this.pickedCards.push(cardName);
  }

  clearPickedCards() {
    this.pickedCards = [];
  }

  checkIfPair(card1Name, card2Name) {
    this.pairsClicked++;
    if (card1Name === card2Name) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
