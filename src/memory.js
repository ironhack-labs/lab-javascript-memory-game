class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    if (this.cards) this.cards.sort(function (a, b) { return 0.5 - Math.random() })
    //else 'undefined' en este caso no  hace falta
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++ //recordar que ++ es añadir 1
      return true
    }
    return false

  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === 12 //linea hecha con el TA Dani.la mia la de abajo

    // ES LO MISMO QUE EL RETURN THIS.PAIRSGUESSED === 12 if (this.pairsGuessed === 12) return true
    //return false

  }
}
