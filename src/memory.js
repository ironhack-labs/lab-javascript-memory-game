class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards= [];
    this.pairsClicked= 0;
    this.pairsGuessed= 0;
  }

  shuffleCards() {
    // ... write your code here
    let shuffle = 0;
     if (this.cards) {
        for (let i = 0; i < this.cards.length - 1; i++) {  
        let j = Math.floor(Math.random() * (this.cards.length - 1 - i) + i);  
        shuffle = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = shuffle;
}
return this.cards;
 }
 return undefined;
}
    
checkIfPair(card1, card2) {
  
  // ... write your code here
    
  if(card1== card2){
         this.pairsGuessed += 1;
         this.pairsClicked += 1;
         return true;
      }else {
           this.pairsClicked += 1;
           return false;
    }
    

  }

  checkIfFinished() {
    // ... write your code here
        if(this.pairsGuessed * 2== this.cards.length){
           return true;
        } else return false;

  }
}
