var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked  = 0;
   this.pairsGuessed  = 0;
 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  this.cardsArr = cardsArr;
  this.newCardsArr = [];
  this.newcardsArr.push(Math.floor(Math.random() * this.cardsArr.length));
  return this.newCardsArr;
};
// hasta aquí llegué, no se porque no me da el Jasmine Should return an array

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {


}

MemoryGame.prototype.finished = function () {

};
