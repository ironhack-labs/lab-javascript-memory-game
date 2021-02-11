class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // console.log("this.cards: ", this.cards);
  }
  
  shuffleCards(cardsArr) {
    if (cardsArr) {        //this isn't right I guess, because I can't console.log my shuffled array if I leave the "if"
      cardsArr  = [...this.cards];
      let shuffled = [];
      let deleted;
      
      for (let i = cardsArr.length; i > 0 ; i--) {
        deleted = cardsArr.splice(Math.floor(Math.random() * Math.floor(cardsArr.length)), 1);
        shuffled.push(deleted[0]);
      }
      // console.log("shuffled:", shuffled);    
      return shuffled;
    }
    else return undefined;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else return false;
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) return true;
    else return false;
  }
}


// isFinished() {
//   if (this.pairsGuessed === this.cards.length / 2) {
//     //alert("You won!!!");
//     this.pickedCards = [];
//     this.pairsGuessed = 0;
//     this.pairsClicked = 0;
//     this.shuffleCards();
//     return true;
//   }
//   else return false;
// }