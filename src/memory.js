class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } else {
      const shuffle = this.cards.sort(() => Math.random() - 0.5)
      return shuffle
    }
  }


  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else if (card1 !== card2) {
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


