class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } else {
      this.cards.length -= 1;
			return Math.floor(Math.random() * this.cards.length) +1;
      };
  };
  

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  };

  checkIfFinished() {
    if (this.pairsGuessed === 0 || this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  };
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
