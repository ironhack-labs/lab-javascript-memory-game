class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards) {
      for (let i = 0; i < this.cards.length; ++i) {
        let j = Math.floor(Math.random() * i);
        let card = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = card;
      }
      return this.cards;
    }

    return undefined;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }

    return false;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
