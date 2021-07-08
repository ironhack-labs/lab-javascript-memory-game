class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0 ;
    this.pairsGuessed = 0 ;
  }

  shuffleCards() {
    // ... write your code here
    let i = this.cards.length
    let j ;
    let temp ;
    for( i -- ; i > 0; i-- ){
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards [j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    //card.name deu erro no teste
    if(card1 === card2){
      
      this.pairsGuessed += 1
      return true
    }else {
      
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    const totalCards = this.cards.length
    if(this.pairsGuessed === totalCards / 2){
      return true
    }else{
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
