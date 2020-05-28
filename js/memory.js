class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    let cardsIndex = this.cards.length
    let temporalyValue = []
    let ramdonIndex;

    if (!cards) {
      return undefined
    }

    while (0 !== cardsIndex) {
      ramdonIndex = Math.floor(Math.random() * cardsIndex);
      cardsIndex -= 1;

      temporalyValue = this.cards[cardsIndex];
      this.cards[cardsIndex] = this.cards[ramdonIndex];
      this.cards[ramdonIndex] = temporalyValue
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if ( card1 === card2 ) {
      this.pairsGuessed += 1;
      return true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
    }
  }
}