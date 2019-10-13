class MemoryGame {
  constructor(cards,pickedCards,pairsClicked,pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = Number([]);
    this.pairsGuessed = Number([]);
    // add the rest of the class properties here
  }

shuffleCards() {

}

checkIfPair(card1, card2) {

  this.pairsClicked += 1;

  if (card1 === card2) {
    this.pairsGuessed +=1;
    return true;
  } else {
    return false;
  }
  
}





isFinished() {} 

}