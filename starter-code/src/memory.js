var MemoryGame = function (cards) {
  this.cards = cards;
  class MemoryGame  {
    constructor(cards){
    this.cards = cards; 
    this.pickedCards=[];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    }
  };

MemoryGame.prototype.shuffleCards = function () {

  for(let i = this.cards.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i);

    let temp = this.cards[i];
    this.cards[i] = this.cards[randomIndex];
    this.cards[randomIndex] = temp;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.firstCard = firstCard;
  this.secondCard = secondCard;
  this.pairsClicked++

  if (this.firstCard === this.secondCard){
    this.pairsClicked++
    this.pairsGuessed++
    return true
  }else{
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
  if (undefined){
    return false
  }else if(this.pairsGuessed === 0) {
   return false
  }else if (this.pairsGuessed !== 0 ){
   return true
  }
 };
 $(document).ready(function) {


};