class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

    if (this.cards) {

      let randomIndex;
      const array = [...this.cards];
      const randomArray = [];
      
      this.cards.forEach(() => {
        
        randomIndex = Math.floor(Math.random() * array.length);
        randomArray.push(array[randomIndex]);
        array.splice(randomIndex, 1);
      });
      
      this.cards = randomArray;

      return this.cards;
    };
  }

  checkIfPair(card1, card2) {
    
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    
    if (this.pairsGuessed == this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
