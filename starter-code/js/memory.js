class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    var currentIndex = this.cards.length,
      temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return undefined;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked = 1
    if (card1 === card2) {
      this.pairsGuessed = 1
      return true
    } return false
  }

  isFinished() {
  
  return this.pairsGuessed * 2 === this.cards.length;
  
  }
}