// $(document).ready(function () {
class MemoryGame {
  constructor(card){
    this.cards = card;
    this.pickedCards =[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    for(let i = this.cards.length-1; i >=0; i--){
      let rando = Math.floor(Math.random() * (this.cards.length-1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[rando];
      this.cards[rando] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  isFinished() {
    if(this.pairsGuessed === 12){
      alert("CONGRATS YOU WON THE GAME!!!!!");
      return true;
    }
    return false;
  }
}
// });