class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let i = this.cards.length-1; i > 0; i--) {
      const randInt = Math.floor(Math.random() * i)
      const otherValue = this.cards[randInt]
      this.cards[randInt] = this.cards[i]
      this.cards[i] = otherValue
    }
  }
  checkIfPair(card1, card2) {

    if ( card1 === card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length/2 ? true : false
  }
}