class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0 
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else {
    let newCards = [...this.cards]
    let i = newCards.length, k , temp; // k is to generate random index and temp is to swap the values
    while(--i > 0){
       k = Math.floor(Math.random() * (i+1));
       temp = newCards[k];
       newCards[k] = newCards[i];
       newCards[i] = temp;
      }
 
    return this.cards = newCards
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      ++this.pairsGuessed
      return true 
    } else 
      ++this.pairsClicked
      return false
  }  

  checkIfFinished() {
    // console.log(this.pairsGuessed)
    if (this.pairsGuessed === this.cards.length/2) return true
      return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
