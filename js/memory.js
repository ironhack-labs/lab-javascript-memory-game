class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    let copy = [], n = this.cards.length, i;

    while (n) {
      i = Math.floor(Math.random() * this.cards.length);
      if (i in this.cards) {
        copy.push(this.cards[i]);
        delete this.cards[i];
        n--;
      }
    }
  }

  checkIfPair(card1, card2) {
    
    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  isFinished() {
    const totalGuessed = this.cards.length/2
    if (totalGuessed === this.pairsGuessed){
      return true
    } else {
      return false
    }
  }
}