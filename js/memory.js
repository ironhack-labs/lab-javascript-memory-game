class MemoryGame {
  constructor(cards = undefined, pickedCards = [], pairsGuessed = 0, pairsClicked = 0) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsGuessed = pairsGuessed;
    this.pairsClicked = pairsClicked;
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined
    }

    for (let i = this.cards.length - 1; i >= 0; i--) {
      let randomPosition = Math.floor(Math.random() * (i + 1));
      let randomCard = this.cards[randomPosition];
      this.cards[randomPosition] = this.cards[i];
      this.cards[i] = randomCard;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    return Math.floor(this.cards.length / 2) === this.pairsGuessed;
  }
}

if (typeof module !== 'undefined') module.exports = MemoryGame;
