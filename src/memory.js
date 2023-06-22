class MemoryGame {
  constructor(cards) {
    this.cards = cards; 
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;// add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    for (let i = this.cards.length - 1; i > 0; i--) { //Comienza en el ultimo indice del Array con -1
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }

    /*this.cards.sort(function() {
      return Math.random() - 0.5;
    });*/

    //this.cards.sort(() => Math.random() - 0.5);
 
  }
 
  checkIfPair(card1, card2) {
    this.pairsClicked++;    
    
    if (card1 === card2) {  
      this.pairsGuessed++;  
      return true;          
    } else {                
      return false;         
    }
    
    // ... write your code here
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;// ... write your code here
  }
}
