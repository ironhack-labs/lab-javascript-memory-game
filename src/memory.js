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
    while (this.cards.length > 1) {
      const randomIndex = Math.floor(Math.random() * this.cards.length);

      const shuffledOnes = this.cards.splice(randomIndex, 1);
      this.cards = shuffledOnes;
    }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++;
      this.pairsClicked++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    console.log(this.pairsClicked, this.pairsGuessed);
    if (this.pairsGuessed === Math.ceil(this.cards.length / 2)) {
      return true;
    }
    return false;
  }
}
