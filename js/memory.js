class MemoryGame {
  constructor(cards){
    this.cards = cards,
    this.pickedCards = [],
    this.pairsClicked = 0,
    this.pairsGuessed = 0,
    this.shuffleCards()
  }

  shuffleCards(cards) {
    if (this.cards.length === 0) {
       return undefined
     }

    //let shuffleCards = [...this.cards]
    //POR QUE NO NOS HA FUNCIONADO CON SORT? D: 
    // return shuffleCards.sort(() => (0.5 - Math.random()))

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    if (card1 == card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    }
    else {
      this.pairsClicked++
      return false
    }
  }
  
  isFinished() {
    if (this.pairsGuessed == this.cards.length/2) {
      return true
    } else {
      return false
    }
  }
}