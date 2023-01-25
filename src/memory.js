class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) undefined
    else {
      this.cards.sort((a, b) => {
        return (.5 - Math.random())
      });
    }

  }

  checkIfPair(card1, card2) {
    // ... write your code here

    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    } else {
      this.pairsClicked++
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}
