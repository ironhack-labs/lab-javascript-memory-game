class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const shuffledDeck = [];
    // While there remain elements to shuffle...
    while (0 !== this.cards.length) {
      // Pick a remaining element...
      const random = Math.floor(Math.random() * this.cards.length);
      shuffledDeck.push(this.cards[random]);
      this.cards = this.cards.filter(card => card !== this.cards[random]);
    }
    this.cards = shuffledDeck;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}