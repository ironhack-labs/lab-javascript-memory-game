class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    //... write your code here
    // function shuffleArray(array) {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    //   //console.log(array);
    //   return array;
    // }

    if (!this.cards) return undefined;
    const copy = [...this.cards];
    this.cards.sort(() => Math.random() - 0.5);
    return this.cards;
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

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}
