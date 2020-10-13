class MemoryGame {
  constructor(cards){
    this.cards = cards; //Array
    this.pickedCards = []; //array
    this.pairsClicked = 0; //number
    this.pairsGuessed = 0; //number
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i=this.cards.length-1 ; i>0; i--) {
      let j = Math.floor(Math.random()*(i+1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1 == card2) {
      this.pairsGuessed ++;
      return true
    } else return false


  }
  isFinished() {
    return this.cards.length/2 == this.pairsGuessed ? true : false;
  }
}