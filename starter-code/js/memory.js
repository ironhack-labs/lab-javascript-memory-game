class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let randomIdx = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[randomIdx];
      this.cards[randomIdx] = temp;
    }
  }

  checkIfPair(Card1, Card2) {
    this.pairsClicked += 1;
    if (Card1 === Card2){
      this.pairsGuessed += 1;
      return true;
    } else return false;
  }
  
  isFinished() {
    if (this.pairsGuessed === 12){
      return true;
    } else return false;
  }
}