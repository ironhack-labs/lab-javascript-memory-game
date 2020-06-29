class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {
    if (typeof (cards) != 'object') {
      return undefined;
    }
    const cardsArray = cards.length;
    let temp, index;

    while (cardsArray) {
      index = Math.floor(Math.random() * cardsArray--);

      temp = cards[cardsArray];
      cards[cardsArray] = cards[index];
      cards[index] = temp;
    }
    return cards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1.name === card2.name) {
      this.pairsGuessed++;
      return true;
    } else return false;
  }

  isFinished() {
    const totalPairs = this.cards.length / 2;
    this.pairsGuessed === totalPairs ? true : false;
  }
}