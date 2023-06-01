console.log("memory.js loaded successfully")

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // Fisher-Yates Shuffle algorithm
    if (Array.isArray(this.cards)) {
      for (let i = this.cards.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = this.cards[i]
        this.cards[i] = this.cards[j]
        this.cards[j] = temp
      }
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  checkIfFinished() {
    if (this.cards.length / 2 === this.pairsGuessed) return true
    return false
  }
}

// const game = new MemoryGame
// game.cards = [1, 1, 2, 2, 3, 3, 4, 4]
// console.log(game.cards)
// game.shuffleCards()
// console.log(game.cards)

// game.checkIfPair(1, 1)
// game.checkIfPair(2, 2)
// game.checkIfPair(3, 1)