class MemoryGame {

  constructor(cards){
    this.cards = cards;
    this.cardTurned1 = "";
    this.cardTurned2 = "";
    this.$card1Node = "";
    this.$card2Node = "";
    this.cardsTurned = 0;
    this.pairsClicked = 0;
    this.pairsFound = 0;
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

  turnCard() {
      this.cardsTurned +=1;
  };

  addToPairsClicked() {
    this.pairsClicked +=1;
  };

  addToPairsFound() {
    this.pairsFound +=1;
  };

  saveCardOne() {
    this.cardTurned1 = $(event.target).attr("name");
  };

  saveCardTwo() {
    this.cardTurned2 = $(event.target).attr("name");
  };

  isPair() {
    return(this.cardTurned1 === this.cardTurned2);
  };

  isFinished() {
    let numPairs = this.cards.length / 2;
    return (this.pairsFound === numPairs) ? true : false;    
  };



};
