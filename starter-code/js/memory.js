class MemoryGame {
  constructor(cards, arr = [], num = 0, num2 = 0) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = arr
    this.pairsClicked = num
    this.pairsGuessed = num2
  }
  shuffleCards() {
    this.cards.sort((a, b) => {
      a = Math.random()
      b = -Math.random()
      return a * b
    })
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else
      return false

  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2)
      return true
    else
      return false


  }
}