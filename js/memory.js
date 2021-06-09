

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
  
    var m = this.cards.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--)

      t = this.cards[m]
      this.cards[m] = this.cards[i]
      this.cards[i] = t
      
    }
    return undefined
  }


  
  checkIfPair(card1, card2) {
   if (card1 === card2) {
     this.pairsGuessed = this.pairsGuessed + 1
     return true
   }
   this.pairsClicked = this.pairsClicked + 1
   return false
  }

  checkIfFinished() {
    if (this.pairsGuessed < (this.cards.length)/2) {
    return false
  }
  else {
    return true
  }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
