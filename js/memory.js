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
    if (!this.cards) return undefined;
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++
      this.pickedCards = []
      this.checkIfFinished()
      return true
    } else {
      this.pairsClicked++
      this.pickedCards = []
      // card1.classList.remove("turned")
      // card2.classList.remove("turned")
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }

}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
