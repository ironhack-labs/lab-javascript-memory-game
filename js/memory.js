class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length-1; i > 0; i--) {
      let j = randomInt(i);
      console.log([this.cards[j], this.cards[i]] = [this.cards[i], this.cards[j]]);
    }
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
    if (this.pairsGuessed < this.cards.length/2) {
      return false;
    } else {
      return true;
    }
  }
}

function randomInt(i) {
  return Math.floor(Math.random() * i);
}