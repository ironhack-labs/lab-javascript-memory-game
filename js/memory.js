class MemoryGame {
  constructor(cards) {
    this.cards = cards

    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    this.cardsEqual = 0
    this.cardsPair = []
    this.pairsGuessedCard = document.getElementById('pairs-guessed')



    // add the rest of the class properties here
  }
  shuffleCards() {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    console.log(this.cards);
    if (!this.cards) this.cards
  }
  checkIfPair(card1, card2) {

    console.log(card1, card2);
    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed = this.cardsEqual + 1
      return true
    } else {
      return false
    }

  }
  isFinished(check) {

    console.log(check)

    if (check === 12) {
      console.log('CONSEGUIDO');
      return true
    } else {
      return false
    }
  }
}