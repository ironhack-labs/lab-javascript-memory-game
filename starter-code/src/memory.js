var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var newArr = [];
  for(var i = 0; i < this.cards.length; i++){
    var random = Math.trunc(Math.random()*cards.length);
    if((newArr.indexOf(cards[random]) != -1) && (newArr.indexOf(cards[random],newArr.indexOf(cards[random])) != -1)) i--;
    else newArr.push(cards[random]);
  }
  this.cards = newArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if(firstCard == secondCard) {
    this.pairsGuessed++;
    return true;
  }
  else return false;
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length/2) return true;
  else return false;
};