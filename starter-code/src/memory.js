class MemoryGame {
  constructor(card) {
    this.cards = cards;

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  };
  shuffleCards() {
    const { cards } = this;
  let m = cards.length, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    [cards[m], cards[i]] = [cards[i], cards[m]];
  }
  return ;
   }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else if (card1 !== card2) { return false };
  }
  isFinished() {
    if (this.pairsGuessed <= 7) {
      return false
    } else {
      return true
    } 
   }
}