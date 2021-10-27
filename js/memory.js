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
    if (this.cards === undefined) return undefined
    for (let i = this.cards.length - 1; i > 0; i--) {
      //Math.floor() para redondear
      //Math.radom() === 0.....1
      const j = Math.floor(Math.random() * (i + 1));
      //tem temporal, va a  guardar un elemento del arreglo en otro lugar
      //lugar (varable)
      const temp = this.cards[i];
      //reasingancion
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }

    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    return card1 === card2 ? ( 
      this.pairsGuessed++,
      true
    ) : false;
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
