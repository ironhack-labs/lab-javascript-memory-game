class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
      let amountOfCards = this.cards.length;
      while (0 !== amountOfCards) {
        let randomCard = Math.floor(Math.random() * amountOfCards);
        amountOfCards -= 1;
        let shuffledPosition = this.cards[amountOfCards];
        this.cards[amountOfCards] = this.cards[randomCard];
        this.cards[randomCard] = shuffledPosition;
      }
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
    if (this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}