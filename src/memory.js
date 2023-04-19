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
    
    for (let i = this.cards.length -1; i > 0 ; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [this.cards[j], this.cards[i]] = [this.cards[i], this.cards[j]]
    }  

    return this.cards
    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }

    else if (card1 !== card2) {
      return false
    }

  }

  checkIfFinished() {
    // ... write your code here

    //total pairs 16

    if (this.pairsGuessed === 12) {
      return true
    }

    else if (this.pairsGuessed < 12) {
      return false
    }

  }
}
