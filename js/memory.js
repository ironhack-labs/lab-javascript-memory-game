class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() { //Fisher-Yates: shuffle
    for (let i = 0; i < this.cards.length-2; i++) {
      let j = Math.floor(Math.random() * this.cards.length);
      let acc = {} // ? Quel est le type de acc ?
      if(j >= i) { 
        acc = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = this.cards;
      }
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    this.pairsGuessed += (card1 === card2);
    return (card1 === card2);
  }

  isFinished() {
    return this.pairsGuessed === this.cards.length/2;
  }
}