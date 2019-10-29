class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }
  // looked shuffle up online - do not understand 100%, also does not
  shuffleCards(cards) {
    var currentIndex = this.cards.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this.cards;

  };
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 == card2) {
      this.pairsGuessed++
      return true;
    } else {
      return false
    }

  }
  isFinished() {
    let finished = this.pairsClicked.length / 2

    if (this.pairsGuessed == 0) {
      return false
    }
    if (finished > this.pairsGuessed) {
      return false
    } else {
      return true
    }
  }
}