class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    for (let i = this.cards.length -1; i >= 0; i--) {
      let randomIndex = Math.floor(i * Math.random())
      let randomCardSelected = this.cards[randomIndex]
      this.cards.splice(randomIndex,1)
      this.cards.push(randomCardSelected)
      }
  }

  checkIfPair(card1, card2) {
    if (card1 && card2) {
      this.pairsClicked ++
    }
    if (card1=== card2) {
      this.pairsGuessed ++
      return true
    }
    return false
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2) {
      return true
    }
    return false
  }
  
}


