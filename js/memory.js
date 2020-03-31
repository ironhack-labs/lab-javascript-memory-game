class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards(array) {
    array = [...this.cards]
    if (typeof array != 'object') {
      console.log('hola')
      return undefined
    }
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    console.log(array)
    return array
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    } else {
      this.pairsClicked++
      return false
    }
  }
  isFinished() {
    const comparisonFactor = this.cards.length / 2
    if (this.pairsGuessed === comparisonFactor) {
      return true
    } else {
      return false
    }
  }
}
