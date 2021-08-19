

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    
    if (!this.cards) {
      return undefined;      
    }  
    else {
      this.cards.sort(() => Math.random() - 0.5);
      console.log(this.cards);
      return this.cards  
    } 
  }

  checkIfPair(card1, card2) {
    if (card1){
      this.pairsClicked++
    }
    if (card2 === card1){
      this.pairsGuessed++
      return true;
    }
    else{
      return false; 
    }
  }
  

  checkIfFinished() {
  if(this.pairsClicked === 0 && this.pairsGuessed === 0){
      return false
    }
  else if (this.pairsGuessed < this.cards.length/2){
    return false
  }
  else if(this.cards.length/2 === this.pairsGuessed){
    return true
  }
}
}






// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;