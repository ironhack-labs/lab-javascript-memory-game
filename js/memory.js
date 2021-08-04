class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards){
      return undefined;
    }
    
    let mix = this.cards.length;
    for (let i = mix -1; i >= 1; i--){
      let randomIn = Math.floor(Math.random() * i);
      let shuff = this.cards[i];      
      this.cards[i] = this.cards[randomIn];
      this.cards[randomIn] = shuff;
    }
  }    
  

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    
    if (card1 === card2){
      this.pairsGuessed ++;
      return true;
    } 
    return false;
  }

  checkIfFinished() {
    return this.pairsGuessed === (this.cards.length) / 2
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
