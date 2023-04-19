class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    console.log(typeof cards)
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0

  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  //shuffleCard no lo consegui hacer por mi cuenta. vi otros métodos pero quería hacerlo con este y ver su lógica. 
  //La parte final, la que habré corchetes me pierdo

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    if (card1 !== card2) {
      return false
    }
  }

  // checkIfFinished() {
  //   // ... write your code here
  //   if (this.pairsGuessed < 12) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed < this.cards.length / 2) {
      return false
    } else {
      return true
    }
  }
}
