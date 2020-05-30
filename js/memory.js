class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const shuffled = [];
    // While there remain elements to shuffle...
    while (0 !== this.cards.length) {
      // Pick a remaining element...
      const random = Math.floor(Math.random() * this.cards.length);
      shuffled.push(this.cards[random]);
      this.cards = this.cards.filter(card => card !== this.cards[random]);
    }
    this.cards = shuffled;
  }

  checkIfPair(card1, card2) {}
  isFinished() {}
}