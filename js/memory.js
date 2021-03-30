class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0


  }
  shuffleCards() {
    if (this.cards !== this.cards) {
      return undefined
    }

    let copy = []
    let n = this.cards.length
    let i = 0


    while (n) {

      i = Math.floor(Math.random () * this.cards.length)

      if (i in this.cards){
        copy.push(this.cards[i])
        delete copy [i]
        n--
      }
      
    }
    return copy
  }


  checkIfPair(card1, card2) {

    console.log(card1, card2)

 
      this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else if (card1 !== card2) {
      return false 
    }
  }


  isFinished() {

   

    if (this.cards.length !== this.pairsGuessed ) {
      return false     
    } else if (this.pairsGuessed === this.cards.length / 2) {
      return true  
    }  
  }
}