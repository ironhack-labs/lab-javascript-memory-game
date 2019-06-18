class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let currentIndex = this.cards.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
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
    // game is won when all pairs are matched.
    // total amount of pairsGuessed is the total amount of cards divided in half
    let winningCountCondition = this.cards.length / 2;
    if (this.pairsGuessed === winningCountCondition) {
      return true;
    } else {
      return false;
    }
  }
}