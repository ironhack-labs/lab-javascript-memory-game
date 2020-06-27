class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }
  shuffleCards() {
    let newArr = [];
    for (let i = 0; i < this.cards.length; i++) {
      let randomCards = Math.floor(Math.random() * this.cards.length)
      newArr.push(this.cards[randomCards])
    }
    return newArr
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}