class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards) {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
    else { return undefined }

  }

  // if (!this.cards) {
  //   return undefined
  // }
  // this.cards.sort((a,b) => (Math.random() - 0.5))
  // método que ha explicado Dani(mejor, COMPRENDER)

  checkIfPair(card1, card2) {
    this.pairsClicked = + 1;

    if (card1 === card2) {
      this.pairsGuessed = +1;
      return true;
    }
    else return false
  }

  checkIfFinished() {
    return this.pairsGuessed === 12

  }
}
