class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    let currentIndex = this.cards.length, temporaryValue, randomIndex

     while (0 !== currentIndex) {
       randomIndex = Math.floor(Math.random() * currentIndex)
       currentIndex -= 1

       temporaryValue = this.cards[currentIndex]
       this.cards[currentIndex] = this.cards[randomIndex]
       this.cards[randomIndex] = temporaryValue
     }
     return cards
   }
   
  checkIfPair(card1, card2) {

     this.pairsClicked++ 
      
     if (card1 === card2) {
      this.pairsGuessed++
      return true
      }  else {
        return false
      }
  }

  isFinished() {
    const pairs = this.cards.length / 2
    if (this.pairsGuessed === pairs){
      return true
    } else {
      return false
    }
  }
}
