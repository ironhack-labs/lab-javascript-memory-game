class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {

    // no me sale
    // let shuffleOne = this.cards.pop()
    // let shuffleTwo = this.cards.shift()
    
    // if (this.pickedCards = 0){
    //   return undefined
    // } else {
    // this.cards.unshift(shuffleOne)
    // this.cards.push(shuffleTwo) }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {

    if (this.pairsGuessed === this.cards.length / 2){
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
