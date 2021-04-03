class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // Durestenfield shuffle
  shuffleCards() {
    // loop trough the array
    for(let counter = this.cards.length - 1; counter > 0; counter--) {
      //get a random roll
      let randomIndex = Math.floor(Math.random() * this.cards.length);
      // EXCHANGE the value with the random number+ 
      // the last value in the this.cards
      [this.cards[counter], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[counter]];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if(card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
isFinished()
   {
    if(this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}