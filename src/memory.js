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
    }
    const shuffle = [...this.cards]
    shuffle.sort(() => Math.random() - 0.5)
    this.cards = shuffle
    return this.cards

  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if(card1 === card2){
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  checkIfFinished() {
    // ... write your code here
  
      if (this.pairsGuessed != 12) {
        return false
      }
      if (this.pairsGuessed = 12) {
        return true
  }
}
}
