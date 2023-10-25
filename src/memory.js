class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    let shuffleArray = [];
    for (let i = 0; i < this.cards.length; i++) {
      let randomCard = Math.floor(Math.random() * this.cards.length);

      this.cards[i] = this.cards[randomCard];
      shuffleArray.push(this.cards[i]);
    }

    return shuffleArray;
  }

  checkIfPair(card1, card2) {
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
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
}
