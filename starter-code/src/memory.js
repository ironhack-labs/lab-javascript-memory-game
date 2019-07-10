class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }
  shuffleCards() {
    var j, x, i;
    for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
      if (firstCard === secondCard) {
        this.pairsGuessed++
        return true
      } else return false

    }
  }
  isFinished() {
    if (this.cards.length / 2 == this.pairsGuessed) {
      return true
    }
    return false
  }


}