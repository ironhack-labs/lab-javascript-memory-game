class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.initializeGame();
  }

  initializeGame() {
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {
    let currentIndex = this.cards.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  checkIfPair(card1, card2) {
    if (typeof card1 === "string" && typeof card2 === "string") {
      this.pairsClicked += 1;
    }
    if (card1 === card2) {
      this.pairsGuessed += 1;
    }
    return card1 === card2;
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    }
  }

  resetGame() {
    this.initializeGame();
  }
}