class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    // ... write your code here
    let newArr = this.cards;
    newArr = newArr.sort(() => Math.random() - 0.5);
    return newArr;
  }
  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsClicked +=1;
      this.pairsGuessed += 1;
      console.log('son par');
  
      return true

      } else {
        console.log("esto no es par");
        this.pairsClicked +=1;
        return false
      }
    }
  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === (this.cards.length)/2) {
      return true;
    } else {
      return false;
    }
  }
}
// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;