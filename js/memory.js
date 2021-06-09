class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

    // add the rest of the class properties here
  }

  shuffleCards() {

    var m = this.cards.length, t, i;

    // While there remain elements to shuffle…
    while (this.cards) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }

    return undefined
    // ... write your code here
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }


    else if (card1 !== card2) {
      return false
    }


  }

  checkIfFinished() {

    if (this.pairsGuessed * 2 === this.cards.length) {
      return true
    } else
      {return false}

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
