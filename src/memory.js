class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards() {
    // ...he intentado adaptar esta estructura que he encontrado investigando. La medio entiendo, pero no termina de funcionar del todo.
    const pickRandom = (cards, card) => {
      const cloneArray = [...cards]
      const randomPicks = []

      for (let index = 0; index < card; index++) {
        const randomIndex = Math.floor(Math.random() * cloneArray.length)

        randomPicks.push(cloneArray[randomIndex])
        cloneArray.splice(randomIndex, 1)
      }
      return randomPicks
    }

  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1

    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      return true
    } else if (this.pairsGuessed === 0) {
      return false
    } else if (this.pairsGuessed < 12) {
      return false
    }
  }
}