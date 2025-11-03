class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed  = 0;
  }

  shuffleCards() {
    const arr = this.cards;
    if (!arr) {
      return undefined;
    }
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
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
    return this.pairsGuessed === (this.cards.length / 2);
  }
}
