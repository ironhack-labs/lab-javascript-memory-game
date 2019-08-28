class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {
    var array = this.cards;
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return undefined;
  }

  checkIfPair(card1, card2) {
    ++this.pairsClicked;
    if (card1.name === card2.name) {
      this.pairsGuessed++;
      this.pickedCards([card1, card2]);
      return true;
    } else {
      this.pickedCards([card1, card2]);
      return false;
    }
  }

  isFinished() {}
}
