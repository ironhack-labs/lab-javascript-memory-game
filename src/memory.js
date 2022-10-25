class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // console.log(this.cards)
    if (!this.cards) {
      return undefined
    } else {
      return this.cards.sort(() => Math.floor(Math.random() - 0.2)) //¿?
      console.log(this.cards)
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

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }

  }

}
