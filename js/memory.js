class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  };

  shuffleCards() {
    // ... write your code here

    if(!this.cards){
      return undefined
    };
    for(let i = this.cards.length - 1; i > 0; i--){
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const currentValueOfCards = this.cards[randomIndex];
      this.cards[randomIndex] = this.cards[i];
      this.cards[i] = currentValueOfCards;
    }  
  };

  checkIfPair(card1, card2) {
    // ... write your code here
    if(card1 === card2){
      this.pairsGuessed += 1
      return true
    } else{
      this.pairsClicked += 1
      return false
    }
   }; 

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === this.cards.length / 2){
      return true 
     } else {
      return false
     }
    };
  


    // The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
