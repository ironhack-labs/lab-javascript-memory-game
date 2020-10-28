class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = cards.map((elm) => elm)
    this.pairsClicked = cards - cards.length
    this.pairsGuessed = cards / cards.length
  }

  shuffleCards() {

    this.cards.forEach((card) => {
      let randomPosition = Math.floor(Math.random() * 24)

      //return the shuffled (mixed) array of cards

      return card


    })
  }

  checkIfPair(card1, card2) {

    if (card1, card2) {

      document.querySelector('.pairs-clicked')
      //should add 1 to `pairsClicked` when we call it

      if (card1 === card2) {
        document.querySelector('.pairs-guessed')
        //add1
      }

      return true;


    } else {

      return false;

    }

  }

  isFinished() {

    if (this.pairsGuessed = 0) {
      //return false at the beginning of the game

      if (this.pairsGuessed < cards.length) {
        //still some pairs to be guessed
        return false

      } else {
        //true if all pairs are guessed
        return true
      }

    }
  }

}