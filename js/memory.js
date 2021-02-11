class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }
  shuffleCards() {
    let remainingCards = this.cards.length,
      cardToSwap,
      nextCardIndex;

    while (remainingCards > 0) {
      nextCardIndex = Math.floor(Math.random() * remainingCards--);
      cardToSwap = this.cards[remainingCards];
      this.cards[remainingCards] = this.cards[nextCardIndex];
      this.cards[nextCardIndex] = cardToSwap;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  isFinished() {
    return this.cards.length / 2 === this.pairsGuessed ? true : false;
  }
}
