class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }
  shuffleCards(card) {
    for (let a = this.cards.length - 1; a > 0; a--) {
      const b = Math.floor(Math.random() * a)
      const cardsIndex = this.cards[a]
      this.cards[a] = this.cards[b]
      this.cards[b] = cardsIndex
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true
    } else {
      return false
    }
  }
}