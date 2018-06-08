var MemoryGame = function (cards) {
this.cards = cards;
this.pickedCards = [];
this.pairsClicked = 0;
this.pairsGuessed = 0;


};



 MemoryGame.prototype.shuffleCard = function (cardsArr) {
   /**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

  for (var i = cardsArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cardsArr[i];
      cardsArr[i] = cardsArr[j];
      cardsArr[j] = temp;
  }
  return cardsArr;

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
