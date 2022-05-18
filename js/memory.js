class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards) {
      const newCards = [...this.cards];
      const randomCards = [];
      for (let i = newCards.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        console.log(randomIndex);
        console.log(randomCards);
        randomCards.push(newCards.splice(randomIndex, 1)[0]);
      }
      this.cards = randomCards;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
