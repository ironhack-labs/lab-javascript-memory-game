class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // Card format: { name: 'ironman', img: 'ironman.jpg' }
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // Fisher-Yates Shuffle algorithm
  shuffleCards() {
    let range = this.cards.length - 1;
    const result = [];

    for (let i = 0; i < this.cards.length; i++) {
      let roll = Math.floor(Math.random() * range);
      result.push(...this.cards.splice(roll, 1, this.cards[range--]));
    }

    this.cards = result;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) this.pairsGuessed++;
    return card1 == card2;
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
