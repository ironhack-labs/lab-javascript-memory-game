class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {

    for (let i = this.cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
      }
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    }
    else {
      return false
    }

  }
  isFinished() {

    if (this.pairsClicked === 0) {
      return false
    }
    else if (this.pairsGuessed === (this.cards.length/2)){
      return true
      alert ("HAS GANADO")
    }
    else {
      return false
    }

  }
}