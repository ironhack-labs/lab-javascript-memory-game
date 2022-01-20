class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
    if (this.cards == undefined){
      return undefined
    } else{
    let i = this.cards.length, k, temp
    while (--i > 0) {
      k = Math.floor(Math.random() * (i + 1));
      temp = this.cards[k];
      this.cards[k] = this.cards[i];
      this.cards[i] = temp;
    }
  }
}
  

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    } if (card1 !== card2.name) {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)){
      return true
    }else{
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
