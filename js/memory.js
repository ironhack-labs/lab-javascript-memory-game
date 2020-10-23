class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
    // add the rest of the class properties here
  }
  shuffleCards(){
    let card, shuffle, i; 	    

    if (!this.cards) {
        return undefined;
      }
   for (i = this.cards.length - 1; i > 0; i--) {
        card = Math.floor(Math.random() * (i + 1));
        shuffle = this.cards[i];
        this.cards[i] = this.cards[card];
        this.cards[card] = shuffle;
      }
}

  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
    if (card1 === card2) {
      this.pairsGuessed +=1;
      return true
    } else {
      return false
    }
  }
  isFinished() {
    if (this.pairsGuessed === (this.cards.length /2)) {
      return true
    } else {
      return false
    }}
  }