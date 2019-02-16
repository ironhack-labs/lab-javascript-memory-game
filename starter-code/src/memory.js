var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function(a,b){
    return Math.random() - 1;
  });
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if(firstCard === secondCard){
      this.pairsGuessed++;
      return true;
      } else {
      return false;
    }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length/2){
    return true;
  } else {
    return false;
  }
}; 
  
  function classChange(changed) {
    $(changed).toggleClass("front");
    $(changed).toggleClass("back");
    $(changed).siblings().toggleClass("front");
    $(changed).siblings().toggleClass("back");
    $(changed).toggleClass("faceUp"); 
}