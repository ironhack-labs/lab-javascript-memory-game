 var MemoryGame = function (cards) {
  this.cards = this.shuffleCard(cards);
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
 };

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var cardsShuffled = [];
  var cardLength = cardsArr.length; 
  for (var index = cardLength-1; index >= 0; index--) 
  {
    var randomNumber = Math.floor(Math.random()*(cardsArr.length));
    cardsShuffled.push(cardsArr[randomNumber]);
    cardsArr.splice(randomNumber,1);
  }

  return cardsShuffled;
};
 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if(firstCard === secondCard){
      this.pairsGuessed++;
      return true;
    }else{
      return false;
    }
 };

 MemoryGame.prototype.finished = function () {
    return this.pairsGuessed > 0
      && this.pairsGuessed === this.cards.length/2;
 };
