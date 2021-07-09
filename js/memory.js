class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    for (let i = this.cards.length - 1; i >= 0; i--) {
      let temp = null;
      let random = Math.floor(Math.random() * i);
      if (this.cards[i] !== this.cards[random]) {
        temp = this.cards.splice(random, 1);
        this.cards.push(temp);
      }
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
