class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  //Shuffle card
 

  shuffleCards() {
//console.log(this.cards);
     if (!(this.cards).length)
    {
      //console.log("cards.length" , this.cards.length)
    return undefined;
   
    }
    if(this.cards.length>0){
      for (let index = this.cards.length-1; index > 0; index--) {
      var newIndex=Math.floor(Math.random() * (index+ 1));
      [this.cards[index], this.cards[newIndex]] = [this.cards[newIndex], this.cards[index]]
      }
    //console.log("this.cards", this.cards)
    return this.cards;
  } 
  }
  

/* card1=this.card[Math.floor(Math.random() * this.cards.length]
card2=this.card[Math.floor(Math.random() * this.cards.length] */

  checkIfPair(card1, card2) {
    this.pairsClicked++
  if (card1 === card2){
    this.pairsGuessed++;
  return true;  
  }else {
  return false;
  }
}


  isFinished() {
  if (this.pairsGuessed === this.cards.length/2){
  return true
  }else{
    return false
  }
  }
}