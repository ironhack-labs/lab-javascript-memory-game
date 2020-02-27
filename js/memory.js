class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }
  shuffleCards() {
    let shuffledArray = []
    while (shuffledArray.length < this.cards.length){
      let r = Math.floor(Math.random() * this.cards.length)
      if (shuffledArray.indexOf(this.cards[r]) == -1){
        shuffledArray.push(this.cards[r])
      }
    }
    this.cards = shuffledArray
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){  
      this.pairsGuessed++   
      return true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed == 12) return true
    else return false
  }
}