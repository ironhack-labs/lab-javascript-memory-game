class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }


  shuffleCards() {
    let baraja
    let cardout
    let nuevabaraja
    
    for (baraja = this.cards.length; baraja=0; baraja--) {
        cardout = Math.floor(Math.random() * baraja)
        nuevabaraja = this.cards[baraja - 1]
        this.cards[baraja - 1] = this.cards[cardout]
        this.cards[cardout] = nuevabaraja
    }
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