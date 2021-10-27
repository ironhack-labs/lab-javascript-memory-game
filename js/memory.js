



class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 1; i--) {
      let j = Math.floor(Math.random() * i);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    
    let isSame = false;
    if(card1 == card2) { 
      this.pairsGuessed++;    isSame= true;} 

      return isSame;
      
      
     }
    // ... write your code here
  

  checkIfFinished() {
    if(this.pairsGuessed == this.cards.length/2){return true}
    else return false
    // ... write your code here
  }

}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
