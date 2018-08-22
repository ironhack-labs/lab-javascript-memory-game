// var MemoryGame = function (cards) {
//   this.cards = cards;

// };

// MemoryGame.prototype.shuffleCards = function () {
// };

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
// }

// MemoryGame.prototype.isFinished = function () {
// };

class MemoryGame {
  constructor(cards){
    this.cards = cards;
  }
  
  shuffleCards(){
    // var i;
    // for (i = cards.length - 1; i >= 0; i--){
    //   var random = Math.floor(Math.random() * cards.length - 1);
    //   console.log(random);
    //   cards[i] = cards[random];
      
    // }

    for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  isFinished(){
    return true;
  }
}