// var MemoryGame = function (cards) {
//   this.cards = cards;
//   this.pickedCards= [];
//   this.pairsClicked= 0;
//   this.pairsGuessed = 0;

// };

// MemoryGame.prototype.shuffleCard = function (cardsArr) {
// var shuffCard =cards.map(function(){
//   Math.random*cards;
// });
// };

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
// this.firstCard=firstCard;
// this.secondCard=secondCard;
// // pairsClicked+=1;
// if(firstCard===secondCard){
// // pairsGuessed+=1;
//   return true;
// }
// return false;
// }

// MemoryGame.prototype.finished = function () {

// };



class MemoryGame{
  constructor(cards){
    this.cards = this.shuffleCard(cards);
  this.pickedCards= [];
  this.pairsClicked= 0;
  this.pairsGuessed = 0;
  }
  shuffleCard(cardsArr){
    return cardsArr.sort(function(a,b){
      return Math.random()-0.5
    })
  }
  //firstCard and secondCard represent the name of the cards
  checkIfPair(firstCard,secondCard){
    this.pairsClicked++;
    if(firstCard===secondCard){
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  finished(){
    return this.pairsGuessed===this.cards.length/2
  }
}