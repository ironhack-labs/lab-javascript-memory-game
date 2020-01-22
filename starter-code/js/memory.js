class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {
    cards = this.cards;
    for (let i = cards.lenght - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

  }
  checkIfPair(card1, card2) {
    this.pickedCards.push(card1, card2)
    this.pairsClicked += 1
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.lenght / 2) {
      return true
    } else {
      return false
    }
  }
}