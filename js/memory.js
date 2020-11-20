class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
        // properties be adding every time a user choose and guess a pair
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }
  shuffleCards() {
    let m = this.cards.length;
    let t,i;

    if(0){
      return undefined;
    }else{

    //While there remain elements to shuffle...
    while(m){
      //Pick a remaining element;
      //after a loop m = m -1;
      i = Math.floor(Math.random()*m--);

      //And swap it (index i) with the current element (index m)
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
    return this.cards;
  }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked +=1;

    if(card1=== card2){

      this.pairsGuessed +=1;
      return true;

    }else{

      return false;
    }

  
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length/2 ? true : false
  }
}