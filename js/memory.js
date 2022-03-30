class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; 
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (typeof this.cards === "undefined"){
    return undefined}

    this.cards.sort(() => Math.random() - 0.5);
        
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked ++
      this.pairsGuessed ++
      return true
    } else {
      this.pairsClicked +=1
      return false
    }
    
 }

  checkIfFinished() {
    if (this.pairsGuessed === 12){
      return true
    } else   {
      return false 
    }   
 }
}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
