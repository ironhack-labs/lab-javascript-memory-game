class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    }
    let currIndex = this.cards.length
    let temp = null
    let randomIndex = null
    while (0 != currIndex) {
      randomIndex = Math.floor(Math.random() * currIndex)
      currIndex -= 1
      temp = this.cards[currIndex]
      this.cards[currIndex] = this.cards[randomIndex]
      this.cards[randomIndex] = temp
    }
  }

  checkIfPair(cards1, cards2) {
    // ... write your code here
    this.pairsClicked += 1
    if (cards1 === cards2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2
  }

}

