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
      let ctr = array.length,
        temp, index

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr)
        ctr--
        temp = array[ctr]
        array[ctr] = array[index]
        array[index] = temp
      }
      return array
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      if (this.pairsGuessed === this.cards.length / 2) {
        this.isFinished()
        return true
      } else {
        return true
      }
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsClicked === 0) {
      return false
    } else if (this.pairsGuessed !== this.cards.length / 2) {
      return false
    } else {
      return true
    }
  }
}