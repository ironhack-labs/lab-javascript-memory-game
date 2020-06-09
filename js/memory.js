class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [ ]
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    this.cards.forEach((elm, i) => {
      let cardShuffled = Math.floor(Math.random() * this.cards.length)
      if (i != cardShuffled) { 
        let shuffleCards =elm
        elm = this.cards[cardShuffled]
        this.cards[cardShuffled] = shuffleCards
      }
    })
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
  isFinished() {
    return (this.cards.length / 2) === this.pairsGuessed
  }
  
}