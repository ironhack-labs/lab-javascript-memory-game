class MemoryGame {
  constructor(cards, pairsClicked, pairGuessed) {
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards() {

    if (!this.cards) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      //esto lo he sacado de internet
    }
    return this.cards;
  }





  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    const sameCard = card1 === card2;
    if (sameCard) {
      this.pairsGuessed += 1
    }
    if (sameCard) {
      return true
    } if (!sameCard) {
      return false
    }
  }


  checkIfFinished() {
    const totalPairs = 12
    if (this.pairsGuessed === 12) {
      return true
    } if (this.pairsGuessed === 0 || this.pairsGuessed < 12) {
      return false
    }

  }
}
