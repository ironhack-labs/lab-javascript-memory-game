class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0


  }

  shuffleCards() {
    // ... write your code here
    //this.cards contain an array of cardsd, we have to change the order of the array

    if (!this.cards) {

      return undefined


    } else {


      return this.cards.sort(() => Math.random() - 0.5)

    }


  }

  checkIfPair(card1, card2) {
    // ... write your code here

    this.pairsClicked += 1

    if (card1 === card2) {

      this.pairsGuessed += 1

      return true

    } else {

      return false

    }


  }

  checkIfFinished() {
    // ... write your code here
    // return false at the beginning of the game
    // return true if all pairs are guessed

    if (this.pairsGuessed === 12) {

      return true

    } else {
      return false
    }

  }
}