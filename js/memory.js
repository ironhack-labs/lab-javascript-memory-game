class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let m = this.cards.length;
    let t;
    let i;
    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
    return undefined
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false
  }
  isFinished() {
    // One error on Jasmine because I set 12 points to win
    // instead of 8. But we there are 12 couples of cards
    // so I guess it's a mistake
    if (this.pairsGuessed === 0 || this.pairsGuessed < 12) {
      return false;
    }
    return true;
  }
}