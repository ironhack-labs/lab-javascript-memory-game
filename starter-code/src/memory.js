class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var aleatorycards = [],
      n = this.cards.length,
      i;

    while (n) {
      i = Math.floor(Math.random() * n--);

      aleatorycards.push(this.cards.splice(i, 1)[0]);
    }

    this.cards = aleatorycards;
  }

  pickCard(card){
      this.pickedCards.push(card);
  }

  getCardId(card){
      return this.pickedCards.indexOf(card);
  }

  deleteCard(card){
      this.pickedCards.splice(this.getCardId(card), 1);
  }

  deleteCards(){
      this.pickedCards = [];
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
