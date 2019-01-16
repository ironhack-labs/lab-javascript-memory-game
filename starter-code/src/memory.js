var MemoryGame = function (cards) {
  this.cards = cards,
  this.pickedCards = [],
  this.pairsClicked = 0,
  this.pairsGuessed = 0,
  this.shuffleCards()
};

MemoryGame.prototype.shuffleCards = function () {
  for(var tmp, cur, top = this.cards.length; top--;) {
    cur = (Math.random()* (top + 1)) << 0 ;
    tmp = this.cards[cur];
    this.cards[cur] = this.cards[top];
    this.cards[top] = tmp
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 
  this.pairsClicked++
  if(firstCard === secondCard){
    this.pairsGuessed++
    return true
  } else return false
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length/2){
    return true
  } else return false
};




// function shuffle(array) {
//   for (var tmp, cur, top=array.length; top--;){
//     cur = (Math.random() * (top + 1)) << 0;
//     tmp = array[cur]; array[cur] = array[top]; array[top] = tmp;
//   }
//   return array;
// }