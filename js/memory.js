class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined
    }

    return this.cards.sort((a, b) => 0.5 - Math.random());

    // ... write your code here
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    }
    return false
  }
}

    // if (this.pairsGuessed === 0 ) {
    //   return false
    // } if (this.pickedCards.length === 0){
    //   return false }
      
  

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
