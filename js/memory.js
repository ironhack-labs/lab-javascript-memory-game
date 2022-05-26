class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
 
  }

  shuffleCards() {
    if (!this.cards){
      return undefined
    }
    for (let i = this.cards.length -1; i > 0; i--) {
      let randomNumber = Math.floor(Math.random() * (i + 1))
      let j = this.cards[randomNumber] 
      this.cards[randomNumber] = this.cards[i]
      this.cards[i] = j
    }
    
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2){
      this.pairsGuessed += 1
      return true
    } 
      return false
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2
    
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
