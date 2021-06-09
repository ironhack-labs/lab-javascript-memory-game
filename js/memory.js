class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

    // add the rest of the class properties here
  }

  shuffleCards() {
    const array = this.cards
    let m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++
      this.pairsClicked++
      return true
    } else {
      this.pairsClicked++
      return false
    }
  }

  checkIfFinished() {
    console.log(this.pairsGuessed)
    console.log(this.cards.length)

    if ((this.pairsGuessed * 2) === this.cards.length) {
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
