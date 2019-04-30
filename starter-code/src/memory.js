class MemoryGame {
  constructor(card){
    this.cards = card
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0
  }
  shuffleCards() {
  
      var currentIndex = this.cards.length, temporaryValue, randomIndex
    
      while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
    
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
      
    
  }
  checkIfPair(card1, card2) {

    this.pairsClicked++
    if(card1===card2){
      this.pairsGuessed++
      return true
    }else{
      return false
    }
  }
  isFinished() {
    if(this.cards.length/2!= this.pairsGuessed){
      return false
    }else{
      return true
    }
  }
}