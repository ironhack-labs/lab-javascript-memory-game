class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if ( this.cards === undefined) return undefined

    for ( let i = this.cards.length - 1 ; i > 0; i--){
      //Math.floor para redondear
      //Math.ramdom ()== 0...1
      const j = Math.floor(Math.random() * (i + 1) )
      // temp = temporal porque va a guardar un elemento del arreglo en otro lugar
      const temp = this.cards[i];
      //reasignacion 
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    return this.cards
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked +=1;

    return card1 === card2 ? (this.pairsGuessed ++, true) : false;
  }

  checkIfFinished() {
    // ... write your code here

    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
