class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; //to store the cards the user has clicked and compare
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

  let currentIndex = this.cards.length
  let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [this.cards[currentIndex], this.cards[randomIndex]] = [
      this.cards[randomIndex], this.cards[currentIndex]];
  }
  

  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
  if (card1 === card2){
    this.pairsGuessed +=1
     return true
  }
  else {
    return false
}
  }
  

  checkIfFinished() {
    if (this.pairsGuessed < this.cards.length){
      return false
    }
    else {
      return true
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
