class MemoryGame {
  constructor(cards) {
    this.cards = cards; 
    this.pickedCards = []; 
    this.pairsClicked = 0; 
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else { 
      let newCards = this.cards.slice()
      let m = newCards.length, t, i; 
      while (m) { 
        i = Math.floor(Math.random()  * m); 
        m--
        t = newCards[m]; 
        newCards[m] = newCards[i]; 
        newCards[i] = t;
      } 
      this.cards = newCards;
      return this.cards 
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1 
    if (card1 == card2) { 
      this.pairsGuessed += 1 
      return true 
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed == this.cards.length/2) return true 
    return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
