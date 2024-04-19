class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    const originalArray = [...this.cards];
    const newArray = [];

    for (let i = originalArray.length; i > 0; i--) {
      const num = Math.floor(Math.random() * originalArray.length);
      newArray.push(originalArray[num]);
      originalArray.splice(num, 1);
    }

    this.cards = newArray;
  }


  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
