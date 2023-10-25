class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // ... write your code here
    //BONUS
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
    // ... write your code here
    // check if PairsGuessed has reached the number of pairs the deck has
    //Make it generic. Valid despite the number of cards a deck might have
    // Return true or false
    if (this.pairsGuessed !== this.cards.length /2) {
      return false
    } else {
      return true
    }
  }
}
