class MemoryGame {
  constructor(arr) {
    this.cards = arr;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    var m = this.cards.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
  }
  checkIfPair() {
    if (this.pickedCards[0] === this.pickedCards[1]) {
      this.pairsGuessed++;
      this.pickedCards = [];
      return true
    }    
    this.pickedCards = [];
    return false
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
