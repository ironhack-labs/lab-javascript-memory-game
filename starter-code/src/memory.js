class MemoryGame {
  constructor(card) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {
    for (let i = 0; i < cards.length - 1; i++) {
      let chooseRandom = i + Math.floor(Math.random() * (cards.length - i));

      let newArr = cards[chooseRandom];
      cards[chooseRandom] = cards[i];
      cards[i] = newArr;
    }
    return cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (pairsGuessed == memoryGame.length) {
      return true;
    } else {
      return false;
    }
    return false;
  }
}
