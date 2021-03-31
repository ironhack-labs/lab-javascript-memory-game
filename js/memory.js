class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    let currentIndex = this.cards.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex]
      this.cards[currentIndex] = this.cards[randomIndex]
      this.cards[randomIndex] = temporaryValue
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else return false
  }
  isFinished() {
    if (this.pairsGuessed * 2 === this.cards.length) return true
    return this.cards.length === this.pairsClicked * 2 &&
      this.pairsClicked !== 0
      ? true
      : false
  }
}

const game = new MemoryGame([1, 2, 3])

console.log(typeof game.shuffleCards())

// console.log(Game.checkIfPair('batman', 'badtman'))
