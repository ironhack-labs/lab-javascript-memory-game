class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; // user picked cards
    this.pairsClicked = 0; // amount to user click
    this.pairsGuessed = 0; // amount to correct pairs
  }

  shuffleCards() {
    var currentIndex = this.cards.length;
    var temporaryValue, randomIndex;
    // Fisher-Yates-algorithm:
    // While there are still remaining elements to shuffle
    while (currentIndex !== 0) {
      // randomly picked an element to swap it with the current element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.cards[randomIndex];
      this.cards[randomIndex] = this.cards[currentIndex];
      this.cards[currentIndex] = temporaryValue;
    }
  }

  // Check whether the picked cards are the same
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  // Check if the game is over by checking if the pairsGussed has reached numbers of card pairs
  isFinished() {
    var pairs = this.cards.length / 2;
    if (this.pairsGuessed === pairs) {
      return true;
    } else {
      return false;
    }
  }
}
