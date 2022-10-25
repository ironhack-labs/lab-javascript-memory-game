class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    } else {
      let chosenIndex = 0
      for (let i = this.cards.length - 1; i >= 0; i--) {

        chosenIndex = Math.floor(Math.random() * i)
        let aux = this.cards[chosenIndex]
        this.cards[chosenIndex] = this.cards[i]
        this.cards[i] = aux

      }
    }

    return this.cards
  }

  checkIfPair(nameCard1, nameCard2) { // checkIfPair(pickedCards[0], pickedCards[1])
    this.pairsClicked++
    if (nameCard1 === nameCard2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    return this.pairsGuessed < 12 ? false : true
  }
}
