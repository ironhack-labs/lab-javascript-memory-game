class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    //shuffleCards method should return the shuffled (mixed) array of cards
    if (this.cards === undefined) return undefined;
    let j, temp;
    let i = this.cards.length;
    while(--i>0){
      j = Math.floor(Math.random() * i+1);
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
    return this.cards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      // console.log(true);
      return true;
    } else {
      // console.log(false);
      return false;
    }
  }
  isFinished() {
    //isFinished method should return false at the beginning of the game
    //isFinished method should return false if there's still some pairs to be guessed
    //isFinished method should return true if all pairs are guessed
    if((this.cards.lenght)/2 === this.pairsGuessed){
      return true;
    }
  }
}