

class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards = this.cards.sort((a,b)=> 0.5 -Math.random())
  }
  checkIfPair(card1, card2) {
    this.pairsClicked ++

    if(card1===card2) {
      this.pairsGuessed++
      return true
    }
    return false
  }

  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true 
    } else {
      return false
    }
  }
}