class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    const cardsSuffle = []
    while (this.cards.length !== 0) {
      const numberRandom = Math.floor (Math.random() * this.cards.length)
      cardsSuffle.push(this.cards [numberRandom])
      this.cards = this.cards.filter(card => card !== this.cards [numberRandom])
    }
    this.cards = cardsSuffle
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
   
     if (card1 === card2) {
      this.pairsGuessed++
     }
     return card1 === card2
  }

  isFinished() {
    return this.pairsGuessed * 2 === this.cards.length
  }
}