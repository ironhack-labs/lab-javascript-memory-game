class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards=0;
    this.pairsClicked=0;
    this.pairsGuessed=0;
  }
  shuffleCards(cards) {
    // for (let i = cards.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [cards[i], cards[j]] = [cards[j], cards[i]];
    // }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1==card2) {
      this.pairsGuessed++;
      return true;
    }
    else {
      return false;
    }
  };

  isFinished() {
    if(this.pairsGuessed==8) return true;
    return false;
  }
}
