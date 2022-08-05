class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
    if (this.cards === undefined)
      return (undefined);
    for (let i = this.cards.length - 1; i > 1; i--){
      let randomId = Math.floor(Math.random() * i);
      let buff = this.cards[randomId];
      this.cards[randomId] = this.cards[i];
      this.cards[i] = buff;
    }
    return (this.cards);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let isPair = card1 === card2 ? true : false;
    if (isPair)
      this.pairsGuessed++;
    return (isPair);
  }

  checkIfFinished() {
    return (this.pairsGuessed === this.cards.length / 2);
  }
}
