class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = 0;
    this.pairGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked +1
      this.pairGuessed +1
    } else {
      this.pairsClicked +1
    }
  }

  checkIfFinished() {
   if (this.pairGuessed === 12) {
     this.shuffleCards()
   }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
