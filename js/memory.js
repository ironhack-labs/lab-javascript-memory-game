class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  }

  shuffleCards() {
    var currentIndex = this.cards.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1.name === card2.name) {
      this.pairsGuessed++;
      return true
    } else {
      return false
    };


  }
  isFinished() {
    if (this.pairsGuessed === this.cards / 2)
  }
}

shuffle(cards);
console.log(cards);