class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
        return undefined
    } else {
        let currentIndex = this.cards.length
        let randomIndex
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--
          [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]]
        }
        return this.cards
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    if (card1 === card2) {
        this.pairsGuessed++
        return true
    } else {
        return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12) {
        return true
    } else {
        return false
    }
  }
}
