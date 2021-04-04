class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for (let counter = this.cards.length -1 ; counter > 0 ; counter --) {
     
      let randomIndex = Math.floor(Math.random()*this.cards.length);
      
      [this.cards[counter], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[counter],
      ]
    }

  }
  
  
  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2){
      this.pairsGuessed++;
      return true;
    }
    return false;

  }



  isFinished() {
    if (this.pairsGuessed) {
      return true;
     
    } else {
      return false
    }
  }
}