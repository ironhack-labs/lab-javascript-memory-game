class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

    if (!this.cards) {
      return undefined
    }

    this.cards.sort(() => Math.random() - 0.5)
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {

      this.pairsGuessed++

      return true
    }

    else if (card1 != card2) {

      return false
    }
  }
  checkIfFinished() {

    if (this.pairsGuessed === 12) {

      return true
    }

    else if (this.pairsGuessed != 0) {

      return false
    }

    else if (this.pairsGuessed === 0) {

      return false
    }

  }
}
