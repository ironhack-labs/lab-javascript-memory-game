class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
   // googled it
    var currentIndex = this.cards.length,  randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  }


  checkIfPair(card1, card2) {
    this.pairsClicked ++

    if (card1 === card2)
    this.pairsGuessed ++

    if (card1 === card2)
    return true
    //else false  ??why it does not work??

    if (card1 !== card2)
    return false
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2)
    return true
    else return false
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
