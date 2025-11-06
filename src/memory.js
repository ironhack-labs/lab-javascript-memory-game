class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;

    const tempCards = [...this.cards];
    const randomResult = [];

    while (tempCards.length > 0) {
      const chosen = Math.floor(Math.random() * tempCards.length);
      randomResult.push(tempCards[chosen]);
      tempCards.splice(chosen, 1);
    }

    this.cards = randomResult;
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) return true;
    if (this.pairsGuessed === 0) return false;
    if (this.pairsGuessed > 0) return false;
  }
}
