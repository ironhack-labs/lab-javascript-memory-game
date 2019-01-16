class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [0];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var tempCard, randPos;
    var currIndex = this.cards.length;
    while (currIndex !== 0) {
      randPos = Math.floor(Math.random() * currIndex);
      currIndex--;
      tempCard = this.cards[randPos];
      this.cards[randPos] = this.cards[currIndex];
      this.cards[currIndex] = tempCard;
    }
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard == secondCard) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  };
}








