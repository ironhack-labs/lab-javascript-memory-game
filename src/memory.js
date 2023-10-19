class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    let copyCards = [...this.cards]
    let shuffledCardsArr = []

    this.cards.forEach(() => {
      let randomIndex = Math.floor(Math.random() * copyCards.length)
      shuffledCardsArr.push(copyCards[randomIndex])
      copyCards.splice(randomIndex, 1)
    });
    this.cards = shuffledCardsArr

    if (!this.cards) {
      this.cards = null
    }

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

    if (this.pairsGuessed >= 12) {
      return true
    } else {
      return false
    }
  }
}
