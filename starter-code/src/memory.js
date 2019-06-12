class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards=null;
    this.pairsClicked=0;
    this.pairsGuessed=0;
  }
  shuffleCards() {
let shuffledCards=this.cards.sort(x=>a.Math.round(Math.random)*100 - b.Math.round(Math.random)*100);
  }
  checkIfPair(card1, card2) {
this.pairsClicked+=1;
if (card1===card2){
  this.pairsGuessed+=1;
  return true;
}
  else{
    return false;
  }
}

  
  isFinished() {
if (this.pairsGuessed==0){
  return false;
}

 else if (this.pairsGuessed===8){
  return true;
}

 else {
  return false;
}

  
}
}