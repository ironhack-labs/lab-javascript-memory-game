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
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        this.cards[i] = this.cards[j];
        this.cards[j] = this.cards[i];
      }
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      // console.log(card1, card2, 'hola');
      this.pairsGuessed += 1;
      return true;
    } else {
      // console.log(card1, card2, 'hola');
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
