class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; // empty array to store card1 and card2
    this.pairsClicked = 0; // counter of the number of try
    this.pairsGuessed = 0; //counter of number of pairs that have been guessed
    this.shuffleCards(); //for each instance the function will be executed
  }

  shuffleCards() {
    let newCards = [];
    while (this.cards.length > 0) {
      let i = Math.floor(Math.random() * this.cards.length);
      newCards.push(this.cards[i]);
      this.cards.splice(i, 1);
    }
    this.cards = newCards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else if (this.pairsGuessed != this.cards.length / 2) {
      return false;
    }
  }
}
