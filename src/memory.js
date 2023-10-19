class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if (this.cards == undefined) {
      return undefined
    }

    else {
      let i = this.cards.length;
      while (--i > 0) {
        let temp = Math.floor(Math.random() * (i + 1));
        [this.cards[temp], this.cards[i]] = [this.cards[i], this.cards[temp]]
      }
    }

  }


  checkIfPair(card1, card2) {

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    else {
      this.pairsClicked += 1
      return false
    }



  }

  checkIfFinished() {
    if (this.pairsGuessed == 12) {
      return true
    } else if (this.pairsGuessed >= 1) {
      return false
    } else {
      this.pairsGuessed == 0
      return false
    }


  }
}
