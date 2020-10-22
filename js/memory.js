class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  
  shuffleCards(cards) {
    // for(let i = this.cards.length — 1; i > 0; i--){
    //   const j = Math.floor(Math.random() * i)
    //   const temp = this.cards[i]
    //   this.cards[i] = this.cards[j]
    //   this.cards[j] = temp
    // } 
    // return temp;
    
  }


  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true;

    } else {
      return false;
    }
  }
  isFinished() {
    // false at the begnning
    // false some pairs still to be guessed
    // true all pairs guessed
    // if (this.pairsClicked === 0){
    //   return false;
    // } else if (this.pairsGuessed !==0){
    //   return false;
    // } else if (this.pairsGuessed === this.cards.length / 2){
    //   return true;
    // }
    return this.cards.length/2 == this.pairsGuessed ? true : false;
  }
}