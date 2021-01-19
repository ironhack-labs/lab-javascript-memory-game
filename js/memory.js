class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }


  shuffleCards() {
    let cardout
    let posicionTemp
    
    for (let i = this.cards.length; i=0; i--) {
        cardout = Math.floor(Math.random() * i)
        posicionTemp = this.cards[i - 1]
        this.cards[i - 1] = this.cards[cardout]
        this.cards[cardout] = posicionTemp
    }
   // return this.cards
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