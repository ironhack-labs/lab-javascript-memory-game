class MemoryGame{
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsCards = [];
    this.pairsGuessed = 0;
  }

  checkIfPair(firstCard, secondCard){
    if(firstCard === secondCard){
      // this.pairsGuessed +=1;
      // console.log("guessed " + this.pairsGuessed)
      return true
    }
    return false
  }

  shuffleCards(){
     this.cards.splice(this.cards.pop()) 
     
  }

  isFinished(){
    if(this.pairsGuessed === this.cards.length / 2){
      return true;
    }else{
      return false;
    }
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