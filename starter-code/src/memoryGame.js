class MemoryGame {

  constructor(cards){
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let shuffledCards = [];
    let cardsToPickFrom = [... this.cards];  // Need to use spread operator as array is a reference data type

    for(let i=0; i<this.cards.length; i++) {
      let numCardsRemaining = cardsToPickFrom.length;
      let randomCardIndex = Math.floor( Math.random() * numCardsRemaining )

      shuffledCards.push(cardsToPickFrom[randomCardIndex]);
      cardsToPickFrom.splice(randomCardIndex, 1);
    }      
    this.cards = [...shuffledCards]; 
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if(card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  };

  isFinished() {
    let numPairs = this.cards.length / 2;
    return (this.pairsGuessed === numPairs) ? true : false;    
  };

};
