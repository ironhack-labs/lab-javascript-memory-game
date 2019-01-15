class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // implement fisher-yates shuffle
    var cardsUnshuffled = this.cards;
    var cardsLength = cardsUnshuffled.length;
    var cardsShuffled = [];
    for (var i = 0; i < cardsLength; i++) {
      var indexRandom = Math.floor(Math.random() * cardsUnshuffled.length);
      var cardRandom = cardsUnshuffled.splice(indexRandom, 1)[0];
      cardsShuffled.push(cardRandom);
    }
    this.cards = cardsShuffled;
  }
  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
      this.pairsGuessed++;
      return true;
    } else return false;
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) return true;
    else return false;
  }
}
