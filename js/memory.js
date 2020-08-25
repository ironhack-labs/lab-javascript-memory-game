class MemoryGame {

  constructor(cards) {

    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

    // add the rest of the class properties here

  }
  shuffleCards(cards) {

    for (let i = this.cards.length - 1; i > 0; i--) {

      // We pick a random index and we store it
      const j = Math.floor(Math.random() * i)

      // We store the current iteration element
      const temp = this.cards[i]

      // We put into the curren iteration index the element that was into the random position
      this.cards[i] = this.cards[j]

      // And the one that was into the current iteration index to where the other was
      this.cards[j] = temp
    }

    return cards


    // if (!array) {

    //   return undefined

    // }

    // const hatArray = [...this.cards]

    // console.log(hatArray)


    // const playArray = []

    // while (hatArray.length !== 0) {

    //   // We choose a card randomly from hat array

    //   let choosenCardIndex = Math.floor(Math.random() * hatArray.length)

    //   // We add it to our pickedCards array

    //   playArray.push(hatArray[choosenCardIndex])

    //   // We remove it from the hat array

    //   hatArray.splice(choosenCardIndex, 1)

    // }

    // array = hatArray

    // return array

  }

  checkIfPair(card1, card2) {

    this.pairsClicked++

    this.pickedCards = []

    if (card1 === card2) {

      this.pairsGuessed++
      return true

    } else {

      return false

    }

  }

  isFinished() {

    if (this.pairsGuessed === 0 || this.pairsGuessed !== this.cards.length / 2) {

      return false

    } else {

      return true

    }

  }
}