class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    console.log(cards)
    // add the rest of the class properties here
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;
  }
  //Iteration 2.2
  shuffleCards() {
    // ... write your code here
    //should return the shuffled (mixed) array of cards
    let shuffle=0;
    if (this.cards){
      for (let i=0;i<this.cards.length -1;i++){
        let rand=Math.floor(Math.random()*(i +1));
        shuffle=this.cards[rand];
        this.cards[rand]=this.cards[i];
        this.cards[i]=shuffle;
      }
      return this.cards;
    }
    return undefined
  }


  checkIfPair(card1, card2) {
    this.pairsClicked++
    //if(card1.name===card2.name){
      if(card1===card2){
        this.pairsGuessed++
        return true
      }
      else {
        return false
      //} 
    }
   }
  

  checkIfFinished() {
    if(this.pairsGuessed===0){
      return false
    }
    if(this.pairsGuessed===this.cards.length/2){
      return true
    }
    else {
      return false
    }
  }
}

