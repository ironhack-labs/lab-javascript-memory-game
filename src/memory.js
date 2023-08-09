class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards = []
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      if (this.checkIfFinished) {
        return "Game over"
      }
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    }
  }
}
