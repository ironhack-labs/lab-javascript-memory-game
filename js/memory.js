class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;

    let index = this.cards.length;

    while (index != 0) {
      let randomIndex = Math.floor(Math.random() * index);
      index--;

      const a = this.cards[index];
      const b = this.cards[randomIndex];

      this.cards[index] = b;
      this.cards[randomIndex] = a;
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) this.pairsGuessed += 1;
    return card1 === card2;
  }

  checkIfFinished() {
    return this.cards.length / 2 !== this.pairsGuessed ? false : true;
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
