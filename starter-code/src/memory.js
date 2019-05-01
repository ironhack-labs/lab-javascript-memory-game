class MemoryGame {

  constructor(card) {
    this.cards = card // Array
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }


  shuffleCards() {
    let array = this.cards
    var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);

      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }

    // return copy;
  }


  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }

    return false

  }


  isFinished() {

    if (this.cards.length / 2 == this.pairsGuessed) return true
    return false

  }

}