
class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked= 0;
    this.pairsGuessed= 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length; i > 0; i--) {
      let random = Math.floor(Math.random() * i--);
      let temp = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = temp;
    }   
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if(card1 === card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) return true
    return false;
  }
}
