class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
if (!this.cards) return undefined;
  else{
    for(let i=this.cards.length; i>0;i--){
      const randomNum = Math.floor(Math.random() * i--);
      this.cards[i] = this.cards[randomNum];
      this.cards[randomNum] = this.cards[i];
    }

  }  

}




  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed === this.cards.length / 2) return true
    else return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
