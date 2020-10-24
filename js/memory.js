class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0
  }

  shuffleCards(array) {
    if (!array) {
      return
    } else {
      let counter = array.length,
        temp, index

      while (counter > 0) {
        index = Math.floor(Math.random() * counter)
        counter--
        temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
      }
      return array
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      if (this.isFinished()) {
        return true
      } else {
        return true
      }
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed !== (this.cards.length / 2)) {
      return false
    } else {
      return true
    }
  }
}