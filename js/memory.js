class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked= 0;
    this.pairsGuessed= 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
  var rand, temp, i;
  if(this.cards == null){
    return undefined
  }
  for (i=this.cards.length-1; i>0; i--){
    rand = Math.floor(Math.random()*(i+1));
    temp= this.cards[i];
    this.cards[i] = this.cards[rand];
    this.cards[rand] = temp;
  };
}

checkIfPair(card1, card2){
  this.pairsClicked +=1 ;
    if(card1 == card2){
      this.pairsGuessed +=1 ;
      return true
     }
    return false
  }

  isFinished() {
  if(this.pairsClicked === 0){
    return false
  } else if (this.pairsGuessed !== 8){
    return false
  } else if (this.pairsGuessed === 8)
    return true
  } 
}
