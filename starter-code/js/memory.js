class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.turnedCard = false
  }

  shuffleCards() {
    let restIterations = this.cards.length
    let i
    let finalIndexPosition
    // While there remain elements to shuffle…
    while (restIterations > 0) {

      // Pick randomly a remaining element…
      i = Math.floor(Math.random() * restIterations--);

      // And swap it with the current element.
      finalIndexPosition = this.cards[restIterations];
      this.cards[restIterations] = this.cards[i];
      this.cards[i] = finalIndexPosition
    }

  }

  checkIfPair(card1, card2) {
    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }


  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
      return true
    }
    return false
  }
}