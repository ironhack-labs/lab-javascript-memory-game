class MemoryGame {
  constructor(cards) {
    this.cards = cards;

    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0


  }

  shuffleCards() {

    if (this.cards === undefined) {

      return undefined;

    }
    // for (let i = shuffledCards.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    // }

    // return shuffledCards

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

  }

  checkIfPair(card1, card2) {

    this.pairsClicked += 1

    if (card1 === card2) {

      this.pairsGuessed += 1;

      return true;

    } else {

      return false;
    }

  }

  checkIfFinished() {

    if (this.pairsGuessed >= 8) {

      return true;

    } else {

      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
