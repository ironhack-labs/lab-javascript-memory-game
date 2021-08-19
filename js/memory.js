class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; 
    this.pairsGuessed = 0; 
    this.pairsClicked = 0;
  }

  shuffleCards() {  
    if(this.cards){  
        for (let i = this.cards.length - 1; i > 0; i--) {
          let Swapindex = Math.floor(Math.random() * (i - 1)); // Generar random index
          const currCard = this.cards[i];  // La posicion actual de nuestro "card"
          const toSwap = this.cards[Swapindex]; // El indice para svipear
          this.cards[i] = toSwap;  // Cambiamos la posicion de nuestro array actual a nuestro array aliatoreo
          this.cards[Swapindex] = currCard; 
        } 
      }
    }
   
   
 
  checkIfPair(card1, card2) {
   this.pairsClicked++; 
   if(card1 === card2){
     this.pairsGuessed++; 
     return true;
   }else{
     return false;
   }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
