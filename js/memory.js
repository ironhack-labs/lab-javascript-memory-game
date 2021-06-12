class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
   
    let currentIndex = this.cards.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  }

  checkIfPair(card1, card2) {
      this.pairsClicked+=1;
      
      if(card1 === card2){
      this.pairsGuessed+=1
      this.pairsClicked+=1;
        return true
      }
      else return false
 
  }

  checkIfFinished() {
    if (this.pairsGuessed == this.cards.length)
    return true
    else return false
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;