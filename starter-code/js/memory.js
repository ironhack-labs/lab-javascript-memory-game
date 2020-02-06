class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let remain = this.cards.length, aux, indexRandom;
    while (remain) {
      indexRandom = Math.floor(Math.random() * remain--);
      aux = this.cards[remain];
      this.cards[remain] = this.cards[indexRandom];
      this.cards[indexRandom] = aux;
    }
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
    return this.pairsGuessed >= this.cards.length / 2;
  }
}