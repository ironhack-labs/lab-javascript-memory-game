class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = cards.map((elm) => elm);
    this.pairsClicked = cards - cards.length;
    this.pairsGuessed = cards / cards.length;
  }

  shuffleCards() {
    this.cards.forEach((card) => {
      let randomPosition = Math.floor(Math.random() * 24);
      return card;
    });
  }

  checkIfPair(card1, card2) {

    if (card1, card2) {
      document.querySelector('.pairs-clicked')
      //add1

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

    if (this.pairsGuessed < cards.length)


      if (this.pairsGuessed < cards.length) {

        return false

      } else {
        return true
      }

  }
}

// Iteration 1: Initial set up
// Iteration 2: Plan your game
// Iteration 2.1: The MemoryGame class
// Iteration 2.2: The class methods

// for(let i = array.length — 1; i > 0; i--){
//   const j = Math.floor(Math.random() * i)
//   const temp = array[i]
//   array[i] = array[j]
//   array[j] = temp
// }

// array.sort(function (a, b) { return 0.24 — Math.random() })
