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
    else {
      let shuffledCards = this.cards;
      // from https://bost.ocks.org/mike/shuffle/
      var m = shuffledCards.length,
        t,
        i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = shuffledCards[m];
        shuffledCards[m] = shuffledCards[i];
        shuffledCards[i] = t;
      }
      return shuffledCards;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 0) return false;
    if (this.pairsGuessed < this.cards.length / 2) return false;
    if (this.pairsGuessed === this.cards.length / 2) return true;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
