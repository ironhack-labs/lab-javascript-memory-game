class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    for (let i = 0; i < this.cards.length; i++) {
      let shuffle = this.cards[i];
      let r = Math.floor(Math.random() * this.cards.length)
      this.cards[i] = this.cards[r]
      this.cards[r] = shuffle
    }
    return this.cards

  }

  checkIfPair(card1, card2) {
    if (card1 == card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    }
    else if (card1 !== card2) {
      this.pairsClicked++
      return false
    }

  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    }

    else return false
  }
}
