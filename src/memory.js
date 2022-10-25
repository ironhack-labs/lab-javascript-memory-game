
// console.log('prueba de conexion 2')

class MemoryGame {

  constructor(cards) {

    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    return this.cards === undefined ? undefined : this.cards.sort(() => Math.random() - 0.5)
}

  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {      
      return false
    }
  }

  checkIfFinished() {
    
   return this.pairsGuessed === 12 ? true : false //estoy intentando aprender a usar los ternarios
  }
}
