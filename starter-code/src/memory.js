var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.shuffleCard();
};



 MemoryGame.prototype.shuffleCard = function () {
   /**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

  console.log("barajando")

  for (var i = this.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
  }
  return this.cards;

 };

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
this.pairsClicked =+ 1
if (firstCard === secondCard){
  this.pairsGuessed =+1
  return true
}
else return false;
 }

MemoryGame.prototype.finished = function () {


if (cards.length/2 === this.pairsGuessed) {console.log("WIN") ;
return true}
else {return false};
};
