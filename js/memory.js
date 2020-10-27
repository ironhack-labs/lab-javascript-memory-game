class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairClicked = 0
    this.pairGuessed = 0
  }


  shuffleCards() {
    let currentIndex = this.cards.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
     
      randomIndex = Math.floor(Math.random()*currentIndex)
      currentIndex -= 1;
      
      temporaryValue = this.cards[currentIndex]
      this.cards[currentIndex] = this.cards[randomIndex]
      this.cards[randomIndex] = temporaryValue
  }



  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1===card2){
      this.pairsGuessed++
      return true
  
    } else {
      return false

  }
}

