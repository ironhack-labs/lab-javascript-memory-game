class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards(cards) {
    if (this.cards === undefined) {
      return undefined
    }
    let index = this.cards.length
    while (--index > 0) {
      let randomIndex = Math.floor(Math.random() * (index + 1));
      [this.cards[randomIndex], this.cards[index]] = [this.cards[index], this.cards[randomIndex]]
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else { return false }
  }
}

