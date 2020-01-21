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
    if (this.cards == null) {
      return undefined
    }
    let newCards = []
    let copyCards = [...this.cards]
    let n = this.cards.length
    let i, t

    while (n) {
      i = Math.floor(Math.random() * n--)

      newCards.push(copyCards.splice(i, 1)[0])
    }
    console.log(newCards)
    return newCards
  }

  showStatus() {
    document.querySelector('#pairs_guessed').innerText = this.pairsGuessed
    document.querySelector('#pairs_clicked').innerText = this.pairsClicked
  }

  checkIfPair(card1, card2) {
    console.log(card1.innerHTML, card2.innerHTML)
    if (card1.innerHTML == card2.innerHTML) {
      this.pairsGuessed++
      this.pairsClicked++
      this.showStatus()
      this.pickedCards = []
      this.isFinished()
      return true
    } else {
      this.pairsClicked++
      this.showStatus()
      this.pickedCards = []
      setTimeout(() => card1.classList.remove("turned"), 500)
      setTimeout(() => card2.classList.remove("turned"), 500)
      return false
    }
  }
  turnCard(card) {
    console.log(this.status)
    card.classList.add("turned")
    if (!this.status) {
      this.status = true
      this.pickedCards.push(card)
      return
    } else {
      this.pickedCards.push(card)
      this.status = false
    }
    this.checkIfPair(this.pickedCards[0], this.pickedCards[1])

  }

  isFinished() {
    if (this.pairsGuessed == (this.cards.length / 2)) {
      return true
    } else {
      return false
    }
  }
}