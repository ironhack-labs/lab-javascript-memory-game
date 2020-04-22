class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let copiedCards = JSON.parse(JSON.stringify(this.cards));
    let mixedCards = []
    for (let i = this.cards.length; i > 0; i--) {
      const randomNumber = Math.round(Math.random() * copiedCards.length);
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true
    }
    return false
  }
  isFinished() {
    if (this.pairsGuessed === 8) {
      return true;
    }
    return false
  }
}