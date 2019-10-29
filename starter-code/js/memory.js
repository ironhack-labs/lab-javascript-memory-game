

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() { 
    for(let i = this.cards.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    } 
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true;
    } else {
      this.pairsClicked += 1
      return false;
    }
  }
  isFinished() {
    if ((this.pairsGuessed * 2) === (this.cards.length)) {
      return true;
    } else {
      return false;
    }
  }
}