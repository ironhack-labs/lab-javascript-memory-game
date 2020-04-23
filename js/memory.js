class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {}

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true
    } else {
      return false
    }
  }
  isFinished() {
    let final = false;
    let pares = this.cards.length / 2
    if (this.pairsGuessed === pares) {
      final = true
    }
    return final


  }
}