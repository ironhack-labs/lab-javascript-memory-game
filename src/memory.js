class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    // ... write your code here
    if (!cards) {
      return undefined;
    }
    /* so: here I'm looping and creating an index to assign to every card, and then swap values. */
    for (let i = 0; i < cards.length; i++) {
      let randomIndex = Math.floor(Math.random() * cards.length);
      const randomIndexCard = cards[randomIndex];
      cards[randomIndex] = cards[Math.floor(Math.random() * cards.length)];
      /* Below, I'm trying to push the randomized card back into the array */
      this.cards.splice(randomIndex, 1);
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }

    return;
  }

  checkIfFinished() {
    if (this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}
