class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length -1; i>0; i--){
      let randomindex = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[randomindex]] = [this.cards[randomindex], this.cards[i]]
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}