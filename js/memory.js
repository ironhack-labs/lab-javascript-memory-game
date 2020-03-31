class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards()
  }

  shuffleCards() {
    if (!this.cards) return undefined
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    if (card1 == card2) {
      this.pairsGuessed += 1
      this.pairsClicked += 1
      return true
    } else {
      this.pairsClicked += 1
      return false
    }
  }

  isFinished() {
    let gameFinish = false
    let numberOfPairs = this.cards.length / 2
    if (this.pairsGuessed == numberOfPairs) {
      gameFinish = true
    }
    return gameFinish
  }
}
