class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {

    // let copy = [], n = this.cards.length, i;

    // while (n) {
    //   i = Math.floor(Math.random() * this.cards.length);
    //   if (i in this.cards) {
    //     copy.push(this.cards[i]);
    //     delete this.cards[i];
    //     n--;
    //   }
    // }

    this.cards = this.cards.sort((a, b)=> 0.5 - Math.random ());
  }

  checkIfPair(card1, card2) {  
    this.pairsClicked ++;
    if (card1 === card2) {
      this.pairsGuessed ++;
      return true;
    }
    return false;
  }
  isFinished() {
    let pairs = this.cards.length/2;
    if(this.pairsGuessed === pairs) {
      return true;
    } else {
      return false;
    }
  }  
}