class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    const hatWithRandomCards = [];
    const tamanhoInicial = this.cards.length;
    for (let i = 0; i < tamanhoInicial; i++) {
      let randomIndex = Math.floor(this.cards.length * Math.random());
      hatWithRandomCards.push(this.cards.splice(randomIndex, 1)[0]);
    }
    this.cards = JSON.parse(JSON.stringify(hatWithRandomCards));
    //this.cards = null
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
