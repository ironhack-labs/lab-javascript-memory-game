class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed= 0;


    // add the rest of the class properties here

  }
  
  shuffleCards() {
    if (this.cards === undefined)return undefined
    for(let i= this.cards.length -1 ; i>0; i--){
      // Math.floor para redondear
      const j = Math.floor(Math.random()* (i + 1));
      // temp temporal va a guardar un elemento del arreglo ten otro lugar
      const temp = this.cards[i];
      //  reasignación
      this.cards[i] = this.cards [j]
      this.cards[j]= temp
      return this.cards
    }
    // ... write your code here

  }

  checkIfPair(card1, card2){
    this.pairsClicked++;
  return card1 === card2 ? ( 
    this.pairsGuessed ++,
    true
  ) : false;

  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
