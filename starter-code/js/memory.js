class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  //Based on Fisher-Yates shuffle, this method walks the array in the reverse order 
  //and swap each element with a random one before it
  shuffleCards(cards) {
    if (cards){
      for (let i = cards.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = cards[i];
        cards[i] =cards[j];
        cards[j] = temp;
      }
      return cards;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    return this.pairsGuessed === 12 ? true : false;
  }
}