class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }


  shuffleCards() {
    let m = this.cards.length
    let t
    let i

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }

    if (this.cards) {
      return
    } else {
      return undefined
    }
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++


    if (card1 == card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }


  send() {
    if (this.pickedCards.length <= 2) {
      this.checkIfPair(this.pickedCards[0], this.pickedCards[1])
      if (this.checkIfPair(this.pickedCards[0], this.pickedCards[1]) == false) {
        console.log("yay")
        this.pickedCards[0].className = "card"
        this.pickedCards[1].className = "card"
      }
    } else if (this.pickedCards.length > 2) {
      this.pickedCards = []
    } else {
      return
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