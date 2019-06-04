class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    var currentIndex = this.cards.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      function getPairGuessed() {
        this.pairsGuessed++;
        document.getElementById("#pairs_guessed").innerHTML = this.pairsGuessed;
      }
      return true;
    }
    return false;
  }

  isFinished() {
    if (this.pickedCards.length !== 24) {
      return false;
    } else {
      return true;
    }
  }
}
