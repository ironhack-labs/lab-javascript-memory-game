class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  };
  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    };
  };
 checkIfPair(firstCard, secondCard) {
    if (this.pickedCards.length % 2 === 0) {
      this.pairsClicked++;
    };
    if (firstCard === secondCard) {
      this.pairsGuessed++;
      return true
    } else {
      return false;
    };
  };
  isFinished() {
    if (this.pairsGuessed == this.cards.length/2) return true;
    return false;
  };
};