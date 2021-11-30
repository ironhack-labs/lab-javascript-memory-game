class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;


  }

  shuffleCards() {
    // ... write your code here
   if(!this.cards){
    return undefined;
   }
    // used a for loop with a shufflecard method, change temp to card
   for (let i = 0; i < this.cards.length; i++) {
    let j = Math.floor(Math.random() * (this.cards.length));
    let card = deck[i];
    deck[i] = deck[j];
    deck[j] = card;
}


  }

  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
