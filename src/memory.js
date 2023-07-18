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
    }
    const shuffledCards = this.cards.sort(() => Math.random() - 0.5)
    return shuffledCards
  }

  checkIfPair(card1, card2) {
    console.log(this.cards.length)
    if (card1 != card2) {
      this.pairsClicked += 1;
      return false
    }
    else (card1 = card2)
    this.pairsClicked += 1;
    this.pairsGuessed += 1;
    return true
  }

  checkIfFinished() {
    console.log(this.pairsGuessed);
    if (this.pairsGuessed == 12) {
      return true
    }
    else
      return false

  }
}

