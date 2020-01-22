class MemoryGame {
  constructor(cards) {
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.status = false
  }

  shuffleCards() {
    let length = this.cards.length
    let i, t

    while (length) {
      i = Math.floor(Math.random() * length--)

      t = this.cards[length]
      this.cards[length] = this.cards[i]
      this.cards[i] = t
    }
    console.log(this.cards)
    return
    if (!this.cards) {
      this.cards
    }
  }

  showStatus() {
    document.querySelector('#pairs_guessed').innerText = this.pairsGuessed
    document.querySelector('#pairs_clicked').innerText = this.pairsClicked
  }

  checkIfPair(card1, card2) {
    if (card1 == card2) {
      memoryGame.pairsGuessed++
      memoryGame.pairsClicked++
      return true
    } else {
      memoryGame.pairsClicked++
      return false
    }
  }
  turnCard(card) {
    card.classList.add("turned")
    if (!this.status) {
      this.status = true
      this.pickedCards.push(card)
      return
    } else {
      this.pickedCards.push(card)
      this.status = false
    }
  }

  isFinished() {
    if (this.pairsGuessed == (this.cards.length / 2)) {
      return true
    } else {
      return false
    }
  }
}