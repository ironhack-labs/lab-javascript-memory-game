class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    // console.log("print");
    let mixedCards = this.cards; // check this one

    if (!mixedCards) {
      return undefined;
    }
    for (let i = mixedCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      //console.log("print this", mixedCards);
      mixedCards[i] = mixedCards[j];
      mixedCards[j] = mixedCards[i];
    }
    //console.log("print")
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 !== card2) {
      //console.log("print false", "clicked", this.pairsClicked);
      return false;
    } else {
      this.pairsGuessed += 1;
      //console.log("print true","clicked", this.pairsClicked, "guessed",this.pairsGuessed);

      return true;
    }
  }

  isFinished() {
    if (this.pairsGuessed === 0) {
      //console.log("print1",this.pairsGuessed)
      return false;
    } else if (this.pairsGuessed < 8) {
      //console.log("print 1",this.pairsGuessed)
      return false;
    } else {
      //console.log("print2",this.pairsGuessed)
      return true;
    }
  }
}
