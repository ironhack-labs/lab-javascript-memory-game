class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let temp;
    let currentLength = this.cards.length;
    let random = 0;
    while (0 !== currentLength) {
      random = Math.floor(Math.random() * currentLength);
      currentLength -= 1;
      temp = this.cards[currentLength];
      this.cards[currentLength] = this.cards[random];
      this.cards[random] = temp
    }
    if (!currentLength)
      return undefined

    else
    return this.cards
  }
  checkIfPair(card1, card2) {
    if (card1 == card2) {
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed < 12) {
      return false;
    } else {
      return true;
    }
  }
}