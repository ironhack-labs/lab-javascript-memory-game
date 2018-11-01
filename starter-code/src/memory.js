// class MemoryGame function () {
//   this.pickedCards = cards;
//   this.pairsClicked = cards;
//   this.pairsClicked = cards;
//   .addClass
// };

// MemoryGame.prototype.shuffleCards = function () {
// };

// MemoryGame.prototype.checkIfPair = function (, ) {
// }

// MemoryGame.prototype.isFinished = function () {
// };

class MemoryGame {
 constructor (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;

 }

  shuffleCards() { 
    this.cards.splice(0,0, this.cards.pop()) 
  }
  checkIfPair (firstCard, secondCard) {
    this.pairsClicked = this.pairsClicked + 1;
    if (firstCard === secondCard) { 
      this.pairsGuessed = this.pairsGuessed + 1
      return true 
    }
    else {
      return false
    }

    }
   isFinished () {
     if (this.pairsGuessed === this.cards.length/2 && this.pairsGuessed > 0) { 
       return true
     }
     else 
     {return false}
   }
 }
 
