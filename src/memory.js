class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    // ... write your code here

    if (!this.cards) {
      return undefined
    }

    const shuffledCards = this.cards.sort(() => Math.random() - 0.5)
    return shuffledCards

  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      console.log(card1, card2)
      return true
    } else if (card1 !== card2) {
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
      return true
    } else if (this.pairsClicked === 0) {
      return false
    }
    else if (this.pairsGuessed < 12) {
      return false
    }

  }
}
