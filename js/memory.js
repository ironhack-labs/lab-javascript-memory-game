class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    const len = this.cards.length
    for(let i = 0 ; i < len ; i++){
      const j = Math.floor(Math.random() * i )
      const a = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = a
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++

    if(card1.dataset.cardName !== card2.dataset.cardName) return false

    this.pairsGuessed++
    return true
  }

  checkIfFinished() {
    if(this.pairsGuessed === (this.cards.length / 2)) return true
    return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

