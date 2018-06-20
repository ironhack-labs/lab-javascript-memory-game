var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(a) {
  var j;
  var x; 

  for (var i = 0; i < a.length; i+=1) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if (firstCard === secondCard){
    this.pairsGuessed ++;
    return true
  }else{
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed === 12){
    return true;
  }else{
    return false;
  }
};
