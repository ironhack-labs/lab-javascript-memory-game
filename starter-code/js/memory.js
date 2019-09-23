class MemoryGame {
  constructor(cards){
    this.cards = cards;
    //saber que cartas estan marcadas
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5)
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }

  isFinished() {
    return this.cards.length
      / 2 === this.pairsGuessed
  }
}

/*
settimeout - si no son iguales se cambia la clase

*/