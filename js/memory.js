class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() { // Fisher-Yates Shuffle
    let k, temp = 0
    for(let i = this.cards.length - 1; i >=0; i--) {
      k = Math.floor(Math.random() * (i + 1))
      temp = this.cards[k]
      this.cards[k] = this.cards[i]
      this.cards[i] = temp
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
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }
    return false
  }
}