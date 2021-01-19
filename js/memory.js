class MemoryGame {
  constructor(cards){
    
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0   

  }
  shuffleCards() {

    let m = this.cards.length
    let t = 0
    let i = 0

    while (m) {
      i = Math.floor(Math.random() * m--)

      t= this.cards[m]
      this.cards[m] = this.cards[i]
      this.cards[i] = t
    }

    return this.cards 

  }
  checkIfPair(card1, card2) {

    this.pairsClicked ++
    if (card1 === card2) {

      this.pairsGuessed ++
      return true

    } else {return false} 

  }
  isFinished() {

    return this.pairsGuessed === this.cards.length/2

  }
}