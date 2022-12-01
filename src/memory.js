class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards(cardsArray) {
    // ... write your code here
    if (cardsArray === undefined) {
      return undefined;
    } else {
      let shuffledCards = cardsArray.sort(function () {
        return Math.random() - 0.5;
      });
      return shuffledCards;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards / 2) {
      return true;
    } else {
      return false;
    }
  }
}
