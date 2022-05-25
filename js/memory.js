class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
    /* for (let i = this.cards.length - 1; i > 0; i--) {
      let shufflePosition = Math.floor(Math.random() * (i + 1));
      let cardRandom = this.cards[shufflePosition]
      this.cards[shufflePosition] = this.cards[i];
      this.cards[i] = cardRandom
    } */
  

    //PARA ENTENDER Y PROBAR A HACERLO FUNCIONAR CON ESTE SISTEMA
  for (let i = this.cards.length - 1; i > 0; i--) {
    let shuffled = Math.floor(Math.random() * (i + 1));
    return this.cards[i] = this.cards[shuffled];
  }
}


  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    } else {
      this.pairsClicked += 1
      return false
    }
  }

  checkIfFinished() {
   if (this.pairsGuessed === this.cards.length / 2) {
     this.shuffleCards()
     return true
   } else {
     return false
   }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
