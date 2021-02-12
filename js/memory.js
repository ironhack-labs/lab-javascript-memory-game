class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }
  shuffleCards(cards) {
   
    for(let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  
    console.log(this.cards);
  };

  checkIfPair(card1, card2) {

    this.pairsClicked += this.pairsClicked +1;

    if (card1 === card2){
      this.pairsGuessed += this.pairsGuessed +1
      return true;
    } else {
      return false
    };
  }

  isFinished() {

    let half = this.cards.length /2;
    if (this.pairsGuessed === 0){
      return false
    } else if (this.pairsGuessed < half){
      return false
    } else if(this.pairsGuessed === half){
      return true
    };
};
}