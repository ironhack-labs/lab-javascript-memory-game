class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (Array.isArray(this.cards)) {
      for (let i = this.cards.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        this.cards.push(this.cards[randomIndex]);
        this.cards.splice(randomIndex, 1);
      }
    }

    // This code is not working, why is that the case?

    // if (typeof this.cards === "array") {
    //   for (let i = this.cards.length - 1; i >= 0; i--) {
    //     const randomIndex = Math.floor(Math.random() * (i + 1));
    //     this.cards.push(this.cards[randomIndex]);
    //     this.cards.splice(randomIndex, 1);
    //   }
    // }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 8) {
      return true;
    }
    return false;
  }
}
