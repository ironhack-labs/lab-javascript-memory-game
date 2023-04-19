class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    if (this.cards = []) {
      return undefined
    } else {

      const cardsShuffled = this.cards.map((card, i) => {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [this.cards[randomIndex], this.cards[i]] = [this.cards[i], this.cards[randomIndex]]
      })

      return cardsShuffled
    }
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {

    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}
