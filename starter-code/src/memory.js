class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var currentIndex = this.cards.length,
      tempValue,
      randoIndex;

    while (currentIndex !== 0) {
      randoIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randoIndex];
      this.cards[randoIndex] = tempValue;
    }
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked = this.pairsClicked += 1;
    if (firstCard === secondCard) {
      this.pairsGuessed = this.pairsGuessed += 1;
      return true;
    } else if (firstCard != secondCard) {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === 0) {
      return false;
    } else if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
