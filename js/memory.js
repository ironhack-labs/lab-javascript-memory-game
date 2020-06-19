export class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    for(let i = 0; i <= this.cards.length -2; i++){
      const j = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if(card1 === card2) {
      this.pairsGuessed ++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2) return true;
    else return false;
  }

  reset(){
    this.shuffleCards();
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
}