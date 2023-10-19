class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards() {

    if (!Array.isArray(this.cards)) {
      return;
    }
    this.cards.forEach((_, i, arr) => {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    });
  }

  checkIfPair(card1, card2) {

    if (card1 === card2) {
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    }
    else {
      this.pairsClicked += 1
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    }
    else if (this.pairsClicked === 0) {
      return false
    }
  }


}
