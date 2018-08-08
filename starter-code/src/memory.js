  function MemoryGame(cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var newarray = [];
  var i = 0;
  while (0 <= i <= cardsArr.length) {
    var randomindex = Math.floor(Math.random()*cardsArr.length);
    newarray.push(cardsArr[randomindex]);
    cardsArr.splice(randomindex, 1)
    i++
  }
  return newarray;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if (firstCard === secondCard) {
  this.pairsGuessed++
  }
  return (firstCard === secondCard);
}

MemoryGame.prototype.finished = function () {
  return (this.pairsGuessed === 12);
};
