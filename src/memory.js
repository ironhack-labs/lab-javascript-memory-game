class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []; // Array to store the cards selected by the user
    this.pairsClicked = 0; // Number of pairs clicked
    this.pairsGuessed = 0; // Number of pairs guessed correctly
    this.shuffleCards(); // Shuffle cards when a new game is created
  }

  shuffleCards() {
    // ... write your code here
    // Fisher-Yates Shuffle algorithm
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++; // Increment pairs clicked

    // Check if the two selected cards are the same
    if (card1 === card2) {
      this.pairsGuessed++; // Increment pairs guessed
      return true; // Return true if they match
    } else {
      return false; // Return false if they do not match
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}
