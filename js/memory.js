class MemoryGame {
	constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards,
    this.pickedCards = [],
		this.pairsClicked = 0,
		this.pairsGuessed = 0
		// add the rest of the class properties here
	}
  shuffleCards() {
    let cards = this.cards
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
	}
  checkIfPair(card1, card2) {
    if (card1 !== card2) {
      this.pairsClicked++
      return false
    }
    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    }
  }
  isFinished() {
    let memoryGame = false

    if (this.pairsGuessed === this.cards.length / 2) {
      memoryGame = true
    }
    return memoryGame
  }
}
