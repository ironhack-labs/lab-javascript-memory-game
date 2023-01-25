class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here

    if (!this.cards) {
      return undefined
    }

    // this.cards.sort((a, b) => Math.random() - 0.5)

    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }

    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++
    document.querySelector('#pairs-clicked').innerHTML = this.pairsClicked

    if (card1.dataset.cardName === card2.dataset.cardName) {
      this.pairsGuessed++
      document.querySelector('#pairs-guessed').innerHTML = this.pairsGuessed
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 12){
      alert("Well aren't you a superhero :)")
      return true
    } else {
      return false
    }
  }
}