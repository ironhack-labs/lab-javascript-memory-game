var MemoryGame = function (cards) {
  this.cards = cards;
  this.pairsClicked = this.pairsClicked ++
this.pairsGuessed = console.log(checkIfPair())
};

MemoryGame.prototype.shuffleCards = function () {
 for ( var i = this.cards.length-1; i > 0; i-- ) {
  var j = Math.floor( i * Math.random() );
  var card1 = this.cards[ j ];
  var card2 = this.cards[i];
  this.cards[ j ] = card1
  this.cards[ i ] = card2
}
}
console.log(shuffleCards())

MemoryGame.prototype.checkIfPair = function (card1, card2) {
if (card1 === card2) {
  return true
}else{ return false
}
if (this.checkIfPair === true){
  this.pairsGuessed ++
}else{
  this.pairsGuessed === this.pairsGuessed
}



MemoryGame.prototype.isFinished = function () {
if (this.pairsGuessed === 12){
  alert('Ganaste!!!')
}else{
  false
}
}; 