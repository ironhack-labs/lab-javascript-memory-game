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
    if (!this.cards) {
      return undefined;
    
    } else {
      const copyCards = [...this.cards];
      const randomCards = [];

      while (copyCards.length) {
        const random = Math.floor(Math.random() * copyCards.length);
        randomCards.push(copyCards[random]);
        copyCards.splice(random, 1);
      }
      
      return this.cards = randomCards;
    }
  }

  
  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed ++;
      return true;
    } else {
      return false;
    }
  }


  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
