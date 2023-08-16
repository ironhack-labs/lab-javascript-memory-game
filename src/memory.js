class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards){
    return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {//array in reverse order, starting from the last index - Loop
      let j = Math.floor(Math.random());//for each card this code produces a random number between 0 and 1 - Loop
      this.cards[i], this.cards[j] = [this.cards[j], this.cards[i]];//swapping the array to shuffle it. - Loop
    }
    return this.cards;
   }
  


  checkIfPair(card1, card2) {
    // ... write your code here
     this.pairsClicked += 1;
     if (card1 === card2){
      this.pairsGuessed += 1;
      return true
     } else {
      return false;
     }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2){//half of the total number of cards which pairs represent
      return true;
    } else {
      return false;
    }
  }
}
