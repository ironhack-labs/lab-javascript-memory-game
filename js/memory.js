class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!arguments) return undefined;
    // copia superficial
    // const cardsCopy = [...this.cards]
    // copia profunda ambas funcionarian
    const cardsCopy = JSON.parse(JSON.stringify(this.cards));
    var m = cardsCopy.length,
      t,
      i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = cardsCopy[m];
      cardsCopy[m] = cardsCopy[i];
      cardsCopy[i] = t;
    }
    this.cards = cardsCopy;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed !== this.cards.length / 2) return false;
    else return true;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
