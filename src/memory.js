class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards){
      return undefined
    }
    let shuffledCards = []
    let n = this.cards.length
    for(let i = 0; i < n; i++){
      i = Math.floor(Math.random()*this.cards.length)
      if(cards[i] in this.cards){
        shuffledCards.push(this.cards[i])
        delete this.cards[i]
        n--
      }
    }
    return shuffledCards
  }

  checkIfPair(card1, card2) {
    if(card1 && card2){
      this.pairsClicked++
      if(card1===card2){
        this.pairsGuessed++
        return true
      }
      if(card1!==card2){
        return false
      }

    }
  }

  checkIfFinished() {
    if(this.pairsGuessed===this.cards.length/2){
      return true
    }
    return false
  }
}
