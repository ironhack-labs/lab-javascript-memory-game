class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    let shuffled = [], n = this.cards.length, i;
    while (n) {
      i = Math.floor(Math.random() * this.cards.length);
      if (i in this.cards) {
        shuffled.push(this.cards[i]);
        delete this.cards[i];
        n--;
      }
    }
    this.cards = shuffled;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed == (this.cards.length/2)) {
      alert("you won!");
       return true;
    } else {
      return false;
    }
  }
}