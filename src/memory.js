class MemoryGame {

  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // add the rest of the class properties here [DONE]

    this.pickedCards = [];  //property + starting value
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // ... write your code here

    if (!this.cards) {

      return undefined

    } else {

      const newGameShuffle = this.cards.sort(() => Math.random() - 0.5) // CONFIRM UNDESTANDING

      return newGameShuffle

    }

  }

  checkIfPair(card1, card2) {
    // ... write your code here

    if (card1 === card2) {

      this.pairsClicked += 1 //self reminder: executions always before return 
      this.pairsGuessed += 1
      return true

    } else {

      this.pairsClicked += 1
      return false

    }

  }

  checkIfFinished() {
    // ... write your code here

    if (this.pairsGuessed === 12) {

      return true

    } else if (this.pairsGuessed < 12) {

      return false

    }

  }

}
//why those consoles goes as undefined?
console.log(this.pickedCards)
console.log(this.pairsClicked)
console.log(this.pairsGuessed)