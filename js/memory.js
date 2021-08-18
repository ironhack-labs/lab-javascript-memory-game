class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    
    if(!cards)return undefined

    let clonedCards = JSON.parse(stringify(cards))
    
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2){
      this.pairsGuessed++;
      return true
    }
   else{return false}
  }

  checkIfFinished() {
    
    if(this.pairsGuessed === this.cards.length / 2){
      return true
    }
  return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
