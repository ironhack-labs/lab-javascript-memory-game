class MemoryGame {
  constructor(cards) {
    this.cards = cards;

    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards()
  }
  shuffleCards() {
    let currentIndex = this.cards.length,
      temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

  }



  checkIfPair(card1, card2) {
    const comparate = card1 === card2
    this.pairsClicked++

    if (comparate) {
      this.pairsGuessed++
    }

    return comparate

  }

  isFinished() { return this.cards.length / 2 === this.pairsGuessed }

}

