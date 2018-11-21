var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function(a,b){
    return Math.random()-0.5;
  });
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

<<<<<<< HEAD
=======
this.pairsClicked ++;
>>>>>>> 398b0707cf99e9a9e7eacb866cc3772d5cf87178
if (firstCard === secondCard){
  this.pairsGuessed++;
  return true;
  }else{
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
<<<<<<< HEAD
=======

  if (this.pairsGuessed === this.cards.length/2){
    return true;
  } else {
    return false;
  }
};

>>>>>>> 398b0707cf99e9a9e7eacb866cc3772d5cf87178

  if (this.pairsGuessed === this.cards.length/2){
    return true;
  } else {
    return false;
  }
};
