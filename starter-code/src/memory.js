class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
   this.cards = cards.map(card => Math.floor(Math.random(card) * card.length));//card.length
   console.log(this.cards);
   
  }
  checkIfPair(card1, card2) {
    this.pairsClicked +=1
    if(card1 === card2){
      
      this.pairsGuessed +=1;
      return true;
    } else {
      
      return false;
    }
  }
  isFinished() {
    let final = false
    if(this.pairsGuessed === 8){
      final = true
    } 
      return final
    }
  }
