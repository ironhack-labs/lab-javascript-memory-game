class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards(cards) {
    // ... write your code here

    if (this.cards.length === 0){
      return undefined
    } else {
    /*let cardsLength = 0 
    cardsLength = this.cards.length
    for(let i = 0; i < this.cards.length; i++){
      let randomCard = Math.floor(Math.random*cardsLength)
      this.pickedCards.push(this.cards[randomCard])
      cardsLength--
    }
    return this.pickedCards*/
  }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 !== card2){
      return false
    }else if (card1 === card2) {
      this.pairsGuessed++
      return true}
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 0){
      return false
    } else if (this.pairsGuessed === 8) {
      return true
    } else if (this.pairsGuessed > 0 && this.pairsGuessed < 12) {
      return false
    }
    
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
