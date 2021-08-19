class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
    // this.shuffleCards(this.cards);
  }


  shuffleCards() {
    if(this.cards === undefined) return undefined;
    // ... write your code here
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

/*
  shuffleCards(cards) {
    // ... write your code here
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    if (!cards) return undefined;
  }
*/

  checkIfPair(card1, card2) {
    // ... write your code here
    // add one in pairsCLicked to keep track of the record
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  resetClickedPair () {
    this.pickedCards = [];
  }

  checkIfFinished() {
    // ... write your code here
    let correctPairs = this.pairsGuessed;
    if (correctPairs < this.cards.length / 2 ) {
      return false;
    }
    else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
