class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards === undefined) {
      return undefined
    }
    let newCards = this.cards.slice()
    let m = newCards.length 
    let t
    let i

      // While there remain elements to shuffle…
    while (m > 0) {
    
        // Pick a remaining element…
      i = Math.floor(Math.random() * m);
      m--
        // And swap it with the current element.
      t = newCards[m];
      newCards[m] = newCards[i];
      newCards[i] = t;
      
    }
    this.cards = newCards;
    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.card1 = card1
    this.card2 = card2

    
    if (this.card1 === this.card2) {
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    } else {
      this.pairsClicked += 1
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
