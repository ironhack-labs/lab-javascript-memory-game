class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    if (this.cards.length === 0) {
      return undefined
    } else {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }

  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }
  isFinished() {
    if (this.pairsClicked === 0) {
      return false
    }
    if (this.pairsGuessed < (this.cards.length / 2)) {
      return false
    }
    if (this.pairsGuessed === (this.cards.length / 2)) {
      alert('You won the game!')
      return true

    }
  }

}

