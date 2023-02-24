class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(this.cards === undefined){
      return undefined;
    }else{
      //Loops over the cards array
      for(let i = 0; i < this.cards.length; i++){
        //Generates a random number
        let random = Math.floor(Math.random() * this.cards.length);
        //Switches current Element with a random element from the array
        this.cards[i] = this.cards[random];
        this.cards[random] = this.cards[i];
      }
   }
   console.log(this.cards);
  }

  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    }else{
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
  }
}
