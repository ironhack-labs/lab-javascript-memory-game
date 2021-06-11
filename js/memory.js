class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // Fisher-Yates Shuffle algorithm
    let currentIndex = this.cards.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle
    while (currentIndex) {
      // Pick a remaing element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;

      return true
    }

    return false
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

