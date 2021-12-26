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
    if(!this.cards) return undefined;
    for (let i = this.cards.length-1; i>=0; i--){
      const random = Math.floor(Math.random()*(i+1));
      const aux = this.cards[i];
      this.cards[i]=this.cards[random];
      this.cards[random]=aux;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    const sameCard = card1===card2;
    this.pairsClicked++;
    sameCard ? this.pairsGuessed++ : null ;
    return sameCard;
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed===this.cards.length/2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
