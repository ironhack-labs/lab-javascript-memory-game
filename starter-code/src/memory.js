class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.clicks = 0;
    this.log = [];
  }

  shuffleCards() {
    let reshuffledCards = [];
    let reshuffledIndex = [];

    // store the random index we already used so that we don't use them again
    while (reshuffledCards.length < this.cards.length) {
      let randomIndex = Math.floor(Math.random()*this.cards.length);
      if (!reshuffledIndex.includes(randomIndex)) {
        reshuffledCards.push(this.cards[randomIndex]);
        reshuffledIndex.push(randomIndex);
      } 
    }
    this.cards = reshuffledCards;
  }


  checkIfPair() {
    if(this.log[0] === this.log[1]) {
      this.pairsClicked+=1;
      this.pairsGuessed+=1;
      return true;
    } else {
      this.pairsClicked+=1;
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      alert("The game is finished!");
    }
  }
}