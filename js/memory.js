class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0
  }

  shuffleCards() {
  //
  }


  checkIfPair(card1, card2) {
    let res
    if(card1===card2){
      this.pairsClicked++
      this.pairsGuessed++
      res=true
    } else if(card1!==card2){
      this.pairsClicked++
      res=false
    }
    return res
  }

  checkIfFinished() {
    if(this.pairsGuessed===12){
      return true
    } else {
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
