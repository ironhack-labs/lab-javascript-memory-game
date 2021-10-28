class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []//cartas que coges 
    this.pairsClicked = 0
    this.pairsGuessed = []
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined
    }
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
  // if(card1 === card2){
  //   this.pairsGuessed +=1  }
  //   else{ 
  //     return false }




  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true
    }
    else {
      return false
    }
  }



// // The following is required for automated testing. Please, ignore it.
// if (typeof module !== 'undefined') module.exports = MemoryGame;
