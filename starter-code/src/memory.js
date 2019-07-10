///////// LOGIC  ///////////////
class MemoryGame {
  constructor(card) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  //Durstenfeld shuffle, a computer-optimized version of Fisher-Yates://
  shuffleCards() {
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = cards[i]
      cards[i] = cards[j]
      cards[j] = temp
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }
  ////this is unsolved////
  isFinished() {
    return this.cards == this.pairsGuessed ? true : false
  }
}
