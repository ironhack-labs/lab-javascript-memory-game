class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked= 0;
    this.pairsGuessed=0;
    // add the rest of the class properties here
  }

  shuffleCards(array) {
      if (array === undefined ){
        return undefined
      }
      var currentIndex = array.length, randomIndex;   //Fisher Yates Shuffle
      while (0 !== currentIndex) {
       randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
        }
      return array;
}

  checkIfPair(card1, card2) {
    this.pairsClicked=this.pairsClicked+1;
    
    if(card1===card2){
      this.pairsGuessed = this.pairsGuessed+1;
      return true;
    } else {
      return false
    }
        
  }

  checkIfFinished() {
    if (this.pickedCards.length===0){
      return false
    }
    if (this.pairsGuessed === this.cards.length/2){
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
