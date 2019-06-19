class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickCards= [];
    this.pairsClicked=0;
    this.pairsGuessed= 0;
    
  }
  shuffleCards(cards) {
    let m = cards.length;
    let t;
    let i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = cards[m];
      cards[m] = cards[i];
      cards[i] = t;
    }
  
    return cards;
  }

  
  checkIfPair(card1, card2) {

    if(card1 == card2){

      this.pickCards=[];


      return true;

    }else {

      this.pickCards=[];

      return false;

    }

  }
  isFinished() {
   
  if(confirm('Successful Message')){
      window.location.reload();  
  }
    
  }
}
