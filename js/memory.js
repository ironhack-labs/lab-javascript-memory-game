class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) return undefined;
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) this.pairsGuessed++;
    return card1 === card2;
    // ... write your code here
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
    // ... write your code here
  }
}

// const g = new MemoryGame([1, 2, 3, 4, 5]);
// g.shuffleCards();
// console.log(g.cards);

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
