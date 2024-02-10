class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
  
    for (let i = 0; i < this.cards.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      //destructuring assignment => the shuffled (mixed) array of cards A = B | B = A
      [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    
    this.pairsClicked++ 
    if (card1 === card2) {
      // If they are the same, increment pairsGuessed []
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    //each pair = 2 cards
    if (this.pairsGuessed === this.cards.length / 2) {
      console.log("Work")
      return true; // all pairs guessed
      
    } else {
      return false; // still pairs to guess
    }
  }
}

//---------------------------------------------------
