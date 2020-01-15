class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    
    if (this.cards.length === 0) {
      return undefined;
    }
    else {
      
      let newCard=[];
      let formerCard=this.cards;
      
      while (formerCard.length !== 0) {

        let randomIndex = Math.floor(Math.random()*formerCard.length);
        newCard.push(formerCard[randomIndex]);
        formerCard.splice(randomIndex,1);
      }

      this.cards=newCard;

    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    else {
      return false;
    }
  }

  isFinished() {
    return (this.pairsGuessed < this.cards.length/2) ?  false : true ;
  }

}
