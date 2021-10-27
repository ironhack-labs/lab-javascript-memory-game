class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined;
    this.cards.sort((a, b) => 0.5 - Math.random());
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    ++this.pairsClicked;
    let compare = card1 === card2;
    //Add 1 if compare is true. 0 if false
    this.pairsGuessed += compare ? 1 : 0;
    return compare;
  }

  checkIfFinished() {
    // ... write your code here
    //instead of 16(4X4),
    //if we choose to extend the game to support higher number of cards
    const totalPairs = this.cards.length / 2;
    const guessed = this.pairsGuessed;
    return totalPairs - guessed === 0;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
