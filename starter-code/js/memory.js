class MemoryGame {
  constructor(cards, pickedCards = [], pairsClicked = 0, pairsGuessed = 0) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  }
  shuffleCards() {
    let newCards = [], n = this.cards.length, i;

    if (!n) {
      return undefined
    } else {
      while (n) {
        i = Math.floor(Math.random() * n);
        if (i in n) {
          newCards.push(this.cards[i]);
          delete this.cards[i];
          n--;
        }
      }
      console.log(newCards)
      return newCards;

    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }
  isFinished() {
    let totalPairs = this.cards.length / 2

    if (this.pairsGuessed == totalPairs) {
      return true
    } else {
      return false
    }
  }
}