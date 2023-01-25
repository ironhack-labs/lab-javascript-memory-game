class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    
    if (this.cards) {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const randomNum = Math.floor(Math.random() * (i));
        [this.cards[i], this.cards[randomNum]] = [this.cards[randomNum], this.cards[i]]

      }
      return this.cards
    }

  }


  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    }
    return false
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12){
      return true
    }
    return false
  }
}




  