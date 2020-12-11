class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked =0;
    this.pairsGuessed =0;
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i >= 0; i--){
      const r = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[r]] = [this.cards[r], this.cards[i]];
    }

  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1===card2){
      this.pairsGuessed++;
      return true
    }
    return false;
  }
  isFinished() {
    if(this.pairsGuessed===this.cards.length/2){
      return true
    }
    return false;
  }
}