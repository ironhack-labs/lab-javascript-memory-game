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
    // used a for loop with a shufflecard method, change temp to card, deck to this.cards
   for (let i = 0; i < this.cards.length; i++) {
    let j = Math.floor(Math.random() * (this.cards.length));
    let card = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = card;
}


  }

  checkIfPair(card1, card2) {
    // ... write your code here
    //we add 1 to pairsClicked with ++
    this.pairsClicked++;

    if(card1 === card2){
    //we add 1 to pairsGuessed with ++
    this.pairsGuessed++
     return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    //pairsGuessed / pairs to get it

    if (this.pairsGuessed === this.cards.length / 2){

      return true
    }

    else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
