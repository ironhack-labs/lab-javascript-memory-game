let card1 = ""
let card2 = ""



class MemoryGame {
  constructor(card) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    this.pickedCards = [],
      n = cards.length,
      i;

    // While there remain elements to shuffle…
    while (n) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * cards.length);

      // If not already shuffled, move it to the new array.
      if (i in cards) {
        this.pickedCards.push(cards[i]);
        delete cards[i];
        n--;
      }
    }
    return this.pickedCards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1 // se ponho this.pairsClicked.VALUE acrescenta um erro

    if (card1.name === card2.name) {
      this.pairsGuessed += 1
      return true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed == cards.length) {
      return true
    } else {
      return false
    }
  }
}