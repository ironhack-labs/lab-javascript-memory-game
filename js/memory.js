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
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      [cards[i], cards[j]] = [cards[j], cards[i]]
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