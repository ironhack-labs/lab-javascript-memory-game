class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0
  }

  shuffleCards(cards) {
    if (!cards) {
      return
    }
    for (let counter = cards.length - 1; counter > 0; counter--) {
      const shuffleIndex = Math.floor(Math.random() * counter)
      const tempIndex = cards[counter]
      cards[counter] = cards[shuffleIndex]
      cards[shuffleIndex] = tempIndex
    }
    return cards
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
      card1.classList.toggle('front')
      card2.classList.toggle('front')
      card1.classList.toggle('back')
      card2.classList.toggle('back')
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