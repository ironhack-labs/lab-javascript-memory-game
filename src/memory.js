class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {

      return undefined

    } else {

      return this.cards.sort(() => Math.random() - 0.5)

    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++

    if (card1 === card2) {

      this.pairsGuessed++

      return true

    } else {

      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    }
    return false

  }
}
