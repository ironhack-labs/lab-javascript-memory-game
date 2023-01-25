class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    let shuffled = cardsArray.sort(function (a, b) {
      return 0.5 - Math.random()
    })
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) { this.pairsGuessed += 1 }
    if (card1 === card2) { return true }
    if (card1 != card2) { return false }
  }


  checkIfFinished() {
    if (this.pairsGuessed >= 12) { return true }
    if (this.pairsGuessed <= 12) { return false }
  }


}
