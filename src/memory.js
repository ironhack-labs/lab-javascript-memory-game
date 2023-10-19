class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [],
      this.pairsClicked = 0,
      this.pairsGuessed = 0
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    let currentIndex = this.cards.length
    let index;
    while (currentIndex > 0) {

      index = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      this.cards[currentIndex] = this.cards[index]
      this.cards[index] = this.cards[currentIndex]
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      this.pairsClicked++
      return false
    }
  }

  checkIfFinished() {
    return this.pairsGuessed == 8
  }
}
