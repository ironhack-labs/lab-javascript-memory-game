class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards()
  }

  shuffleCards() {
    var tempCard, randPos;
    var currIndex = this.cards.length;
    while (currIndex) {
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
    // if(this.pairsClicked === 0) return false
    // return this.pairsGuessed === this.cards.length/2;
  };
}








