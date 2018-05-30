var MemoryGame = function (cards) {
  // this.cards = this.shuffleCard(cards);
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0; 
};

MemoryGame.prototype.shuffleCard = function (cardsArr)
{
  var cardsAreshuffled = [];
  var ourLength = cardsArr.length; 
  for (var index = ourLength-1; index >= 0; index--) 
  {
    var randomNumber = Math.floor(Math.random()*(cardsArr.length));
    cardsAreshuffled.push(cardsArr[randomNumber]);
    cardsArr.splice(randomNumber,1);
  }

  return cardsAreshuffled;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
if (firstCard === secondCard) this.pairsGuessed++;
this.pairsClicked++;
return (firstCard === secondCard);
}

MemoryGame.prototype.finished = function () {
return (this.pairsGuessed===12);
};
