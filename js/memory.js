class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if(!this.cards) {
      return undefined
    }

    const randomCards = []
    const lengthCards = this.cards.length

    for(let i = 0; i < lengthCards ; i++){
      let index = Math.floor(Math.random() * this.cards.length)
      randomCards.push(this.cards[index])
      this.cards.splice(index, 1)
    }
    this.cards = randomCards
  }
  

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else {
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
