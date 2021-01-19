class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    const copycards = this.cards.slice()
    let newcards = []

      while (copycards.length > 0) {
        const randomIndex = Math.floor(Math.random() * copycards.length)
        newcards.push(copycards[randomIndex])
        copycards.splice(randomIndex, 1)
      }
      this.cards=newcards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
   if(card1===card2){
    this.pairsGuessed++
    return true
    } else
      return false
  }

  isFinished() {
   if(this.cards.length === 24)
    return false
   if(this.pairsGuessed === this.cards.length/2)
      return true
    else
      return false
  }
}