class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here

  }

  shuffleCards() {
    try {
      if (this.cards) {
        for (var i = this.cards.length - 1; i > 0; i--) {
          const swapIndex = Math.floor(Math.random() * (i - 1))
          const currentCard = this.cards[i]
          const cardToSwap = this.cards[swapIndex]
          this.cards[i] = cardToSwap
          this.cards[swapIndex] = currentCard
        }
        // return this.pickedCards
      }
    } catch (error) {
      throw new Error(error)
    }
    // return this.pickedCards
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    try {
      this.pairsClicked++
      if (card1 === card2) {
        this.pickedCards.push(card1)
        this.pairsGuessed++
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
