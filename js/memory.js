class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if(this.cards === undefined) {
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      //tem temporal va a guardar un elemento del arreglo en otro lugar(variable)
      const temp = this.cards[i];
      //reasignación
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }

    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2){
      this.pairsGuessed += 1;
      return true;      
    } else {
      return false
    }
    // ... write your code here
  }

  checkIfFinished() {
    const pairs = this.cards.length/2;
    return this.pairsGuessed === pairs ? true : false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
