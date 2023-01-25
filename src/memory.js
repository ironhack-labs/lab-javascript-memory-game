class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards === undefined) {
      return undefined
    }

    const cardsCopy = JSON.parse(JSON.stringify(this.cards))
    const newCards = []

    while (cardsCopy.length > 0) {
      const random = Math.floor(Math.random() * (cardsCopy.length))
      const removedItem = cardsCopy.splice(random, 1)

      newCards.push(removedItem)
    }
    this.cards = newCards

    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
      return true
    }
    return false
  }
}
