class MemoryGame {
  constructor(cards, /*pickedCards, pairsClicked, pairsGuessed*/) {
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
      const newGame = this.cards.sort(() => Math.random() - 0.5);
      return newGame
    }

  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1
      this.pairsGuessed += 1;
      return true
    } else (card1 != card2)
    this.pairsClicked += 1
    return false
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else if (this.pairsGuessed != 12) {
      return false
    }
  }
}

