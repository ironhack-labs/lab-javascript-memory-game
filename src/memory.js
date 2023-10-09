class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined;
    }

    for (let i = this.cards.length - 1; i >= 1; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let intermediate = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = intermediate;
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    let result = card1 === card2;

    if (result) {
      this.pairsGuessed++;
    }

    return result;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
