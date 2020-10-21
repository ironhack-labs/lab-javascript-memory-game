class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  /*Shuffle 
  for(let i = array.length — 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}*/
  shuffleCards() {
    for (let cards = this.cards.length -1; cards > 0; cards--) {
      const shuffleCards = Math.floor(Math.random() * (cards + 1));
      let shuffle = this.cards[cards];
       this.cards[cards] = this.cards[shuffleCards];
       this.cards[shuffleCards] = shuffle;
    };
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++ ;
    if (card1 === card2){
      this.pairsGuessed ++ ;
      return true
    } else {
      return false
    }
  }
  
  isFinished() {
    if (this.pairsClicked === 0) {
      return false;
    }
    if (this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  }
}