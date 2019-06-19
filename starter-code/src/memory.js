class MemoryGame {
  
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }
  shuffleCards() {
    let sizeOfDeck = this.cards.length;
      for (let i = sizeOfDeck - 1; i >= 0; i-- ){
        // console.log("shuffle i= " + i);
        let j = Math.floor(Math.random()*i);
        let temporal = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = temporal;
      }
  }
  checkIfPair(card1, card2) {
    
    this.pairsClicked +=1;
    
    if (card1.parent().attr('data-card-name') === card2.parent().attr('data-card-name')) {
      this.pairsGuessed +=1;
      
      return true;
    }
    
    return false;
  }
  isFinished() {
    return this.pairsGuessed === (this.cards.length/2);
  }
}