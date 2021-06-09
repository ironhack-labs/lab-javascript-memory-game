class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards = this.cards) {

    if (!this.cards === undefined) { return undefined }

    else {

      let m = cards.length, t, i;
      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;



      }
    }
  }
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1

    if (card1 == card2) {
      this.pairsGuessed += 1

      return true

    }
    else {
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed == 8) {

      return true
    }
    else {

      return false
    }

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
