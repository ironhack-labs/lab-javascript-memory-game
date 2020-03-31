class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.shuffleCards()
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(arg) {
    // if (!cards) return undefined //Si no obtenemos argumento

    const shuffledCards = []
    let index = 0

    while (this.cards.length >= 1) {
      index = Math.round(Math.random() * (this.cards.length - 1))

      shuffledCards.push({ ...this.cards[index] })
      this.cards.splice(index, 1)
    }

    this.cards = shuffledCards

    if (!arg) return undefined
    else return shuffledCards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++

    if (card1 == card2) {
      this.pairsGuessed++
      return true
    }
    else return false
  }

  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) return true
    else return false
  }
}