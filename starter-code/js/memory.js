class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {       

      let currentIndex = this.cards.length;
      let tmpValue = undefined;
      let randomIndex;
      
      while (currentIndex > 0) {        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        tmpValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = tmpValue;
      }
    
      return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    let cards = false;

    if(card1 === card2){
      cards = true; 
      this.pairsGuessed ++;     
    } 

    return cards;
  }

  isFinished() {
    let hasFinished = false;
    let totalPairs = this.cards.length / 2;

    if(this.pairsGuessed >= totalPairs){
      hasFinished = true;
    }
    return hasFinished;
  }
}