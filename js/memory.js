class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; //ARRAY storing cards the user HAS clicked so we can compare them.
    this.pairsClicked = 0; //ARRAY storing every time a player choose
    this.pairsGuessed = 0; //and guess a pair.
  }

  shuffleCards() {
    if (!this.cards) return undefined;
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
    if (card1 === card2) {
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
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
