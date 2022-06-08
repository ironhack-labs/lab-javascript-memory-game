class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    let newCards = []
    if (!this.cards) {
      return undefined
    } else {

      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        const temp = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = temp;
      }

      return newCards
    }
  }



  checkIfPair(card1, card2) {
    const newClickedPair = this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true

    } else if (card1 !== card2) {

      return false
    }
    // ... write your code here
  }

  checkIfFinished() {
    if (this.pairsGuessed < 12) {
      return false
    } return true
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
