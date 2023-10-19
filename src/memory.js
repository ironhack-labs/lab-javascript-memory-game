class MemoryGame {
  constructor(cards, pairsClicked, pairsGuessed
  ) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    //LO HE TENIDO QUE COPIARLO ME HA SIDO IMPOSIBLE HACERLO 

    if (!this.cards) {
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
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
    } else {
      return false
    }
  }
}
