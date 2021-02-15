class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = Number();
    this.pairsGuessed = Number();
    // add the rest of the class properties here
  }

  // Durstenfeld shuffle : optimized of fisher-yates
  shuffleCards(cards) {
    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
  }
  }
 //card1 = "ironman";
 //card2 = "batman";
  //if 2 cards open --> pairsClicked add 1
 //if card1 = card2 --> pairsGuessed add 1 + return true
 //else card1 != card2 --> return false
 checkIfPair(card1, card2) {
  if (card1 !== card2) {
     this.pairsClicked++;
        return false;
   }  else if (card1 === card2) {
     this.pairsClicked++;
     this.pairsGuessed++;
        return true;
    }
  }
  isFinished() {
    if (this.pairsGuessed!==8){
      return false;}
    else if (this.pairsGuessed===8){
      return true ; }
  }
}