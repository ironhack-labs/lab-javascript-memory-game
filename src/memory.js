class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    }
    for (let i = 0; i < this.cards.length; i++) {
      let temporarySlot = this.cards[i]
      let randomCard = Math.floor(Math.random() * this.cards.length)
      this.cards[i] = this.cards[randomCard]
      this.cards[randomCard] = temporarySlot
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here

    if (card1 === card2) {
      this.pairsGuessed += 1
      this.pairsClicked += 1
      return true
    }
    if (card1 !== card2) {
      this.pairsClicked += 1
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here

    if (this.pairsGuessed <= 11) {
      return false
    }
    else {
      return true
    }
  }
}

