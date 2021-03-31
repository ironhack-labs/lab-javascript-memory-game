class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cards) {
    for(let i = this.cards.length -1; i>0; i--){
      let k = Math.floor(Math.random() * (i + 1))
      let temp = this.cards[i]
      this.cards[i] = this.cards[k]
      this.cards[k] = temp; 
      } 
  }
  checkIfPair(card1, card2) {
    if(card1 == card2){
      this.pairsGuessed ++
     // return true
    }else{
      this.pairsClicked ++
     // return false
    }
  }
  isFinished() {
    if(this.pairsGuessed == (this.cards.length)/2){
      return true
    }else{
      return false
    }
  }
}

