class MemoryGame {
  constructor(cards, pickedCards = [], pairsClicked = 0, pairsGuessed = 0) {
    this.cards = cards;
    this.pickedCards = pickedCards
    this.pairsClicked = pairsClicked
    this.pairsGuessed = pairsGuessed
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    } else {
      let shuffle = this.cards.sort(() => Math.random() - 0.5)
      return shuffle
    }
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked = +1
    if (card1 !== card2) {
      return false
    } else if (card1 === card2)
      this.pairsGuessed = +1
    return true
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}