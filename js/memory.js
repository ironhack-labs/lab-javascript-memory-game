/*class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // Iteration 2.1
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // Iteration 2.2
  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } //But this isn't really necessary, because the function is not receiving this.cards as an argument

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  resetClickedPair() {
    this.pickedCards = [];
  }

  checkIfFinished() {
    let correctPairs = this.pairsGuessed;
    if (correctPairs < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;*/

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    this.shuffleCards();
  }

  shuffleCards() {
    // ... write your code here
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  resetClickedPairs() {
    this.pickedCards = [];
  }

  checkIfFinished() {
    // ... write your code here
    let correctPairs = this.pairsGuessed;
    if (correctPairs < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
