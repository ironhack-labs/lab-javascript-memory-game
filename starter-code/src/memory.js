class MemoryGame{
  constructor(arrayOfCards){
    this.cards = arrayOfCards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }
  shuffleCards() {
    for (let i =0; i <this.cards.length; i++) {
      let j = Math.floor(Math.random()*(i+1));
      let a = this.cards[i];
      let b = this.cards[j];
      this.cards[i]= b;
      this.cards[j]= a;
    }
    return this.cards;
  }
  checkIfPair(firstCard, secondCard){
    this.pairsClicked++;
    if (firstCard === secondCard) {
      this.pairsGuessed++;
      return true
    } else {return false}
  }
  isFinished(){
    if (this.pairsGuessed ===this.cards.length/2){
      alert('You Won!')
      return true
    } else {return false}
  }
}





// var MemoryGame = function (cards) {
//   this.cards = cards;
// };


// MemoryGame.prototype.shuffleCards = function () {
// };

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
// }

// MemoryGame.prototype.isFinished = function () {
// };