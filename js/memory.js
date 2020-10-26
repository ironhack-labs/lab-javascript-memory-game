class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }
  shuffleCards() {
    let numRandom =0;
    let aux;
       for(let i=this.cards.length-1;i>0;i--){
         numRandom = Math.floor(Math.random()*i);
         aux = this.cards[i];
         this.cards[i] = this.cards[numRandom];
         this.cards[numRandom] =aux;
         console.log(this.cards);
       }
     
     }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1===card2){
      this.pairsGuessed++;
      return true;}
    else return false;
  }
  isFinished() {
    if(this.cards.length/2 ===this.pairsGuessed)return true;
    else return false;
  }

}