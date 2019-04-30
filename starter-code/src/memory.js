class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards()
  }

  shuffleCards() {
    console.table(this.cards)
    let m = this.cards.length
    let t, i
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = this.cards[m]
      this.cards[m] = this.cards[i]
      this.cards[i] = t
    }
    console.table(cards)
    this.cards = this.cards

  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      /*       console.log('card1', card1)
            console.log('card2', card2) */
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false
  }
}