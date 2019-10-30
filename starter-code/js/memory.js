class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let arr = this.cards
    var curInd = arr.length,
      tempVal, randomInd
    while (0 !== curInd) {
      randomInd = Math.floor(Math.random() * curInd)
      curInd -= 1
      tempVal = arr[curInd]
      arr[curInd] = arr[randomInd]
      arr[randomInd] = tempVal
    }
    this.cards = arr
  }


  checkIfPair(card1, card2) {
    this.pairsClicked = this.pairsClicked + 1
    if (card1 === card2) {
      this.pairsGuessed = this.pairsGuessed + 1
      return true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }
}