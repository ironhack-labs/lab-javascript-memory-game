class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
  let i = this.cards.length
  let k = null;
  let temp = null; 
   while (--i > 0){
      k = Math.floor(Math.random() * (i+1));
      temp = this.cards[k];
      this.cards[k] = this.cards[i];
      this.cards[i] = temp;
   }
   }
   //should return true or false
   //should add 1 to pairsClicked 
   //should add 1 to pairsGuessed if they're the same
  checkIfPair(card1, card2) {
    const isMatch = card1 === card2;
    if (isMatch) {
      this.pairsGuessed += 1;
    } 
    this.pairsClicked += 1;

    return isMatch;
  }
//check if guessed pairs are equal to number of pairs
  isFinished() {
return this.pairsGuessed === (this.cards.length) / 2;
  }
}