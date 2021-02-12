class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;




    // add the rest of the class properties here
   
  }
  shuffleCards() {
    let i = this.cards.length, swap, holder;
    while (--i > 0){
      swap = Math.floor(Math.random() * (i+1));
      holder = this.cards[swap];
      this.cards[swap] = this.cards[i];
      this.cards[i] = holder;

    }
  }
  checkIfPair(card1, card2) {
    let cardsCompaire = card1 === card2;
    
    if(cardsCompaire === true){
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    }else if(cardsCompaire !== true){
      this.pairsClicked += 1;
      return false;
    }

  }
  isFinished() {
    let numberOfPairs = this.cards.length / 2;
    if(this.pairsGuessed === numberOfPairs){
      return true;
    }else if(this.pairsGuessed < numberOfPairs){
      return false;
    }
  }
}