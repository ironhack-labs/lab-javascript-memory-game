class MemoryGame {
  constructor(cards) {
    // añadir el resto de las propiedades de la clase aquí
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {  //Barajear cartas
    // ... write your code here
    if (!this.cards) {
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); //random index
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // swap
    }
  }

  checkIfPair(card1, card2) {  //comprobar Si es par
    // ... write your code here
    if (card1 !== card2) {
      this.pairsClicked++
      return false
    } else {
      this.pairsGuessed++
      return true
    }

  }

  checkIfFinished() { //compruebe si ha finalizado
    // ... write your code here
    return this.cards.length / 2 === this.pairsGuessed
  }
}
