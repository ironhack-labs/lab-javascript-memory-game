class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [],
    this.pairsClicked = 0,
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }
    let i = this.cards.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [this.cards[randIndex], this.cards[i]] = [this.cards[i], this.cards[randIndex]];
  }
  return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code 
    this.pairsClicked += 1;
    if (card1 === card2) {
            this.pairsGuessed += 1;
      return true;
    } else if (card1 !== card2) {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed * 2 === this.cards.length) {
      return true;
    } else {
      return false;
    }
  } 
}

export default MemoryGame