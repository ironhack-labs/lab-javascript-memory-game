var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed  = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function() {
    return Math.random() - 0.5;
  });
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
   this.pairsClicked ++; 
  $("#pairs_clicked").text(this.pairsClicked);
  if(firstCard === secondCard){
    this.pairsGuessed ++;
    $("#pairs_guessed").text(this.pairsGuessed);
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.isFinished = function () {
  
  var cardsCount =  this.cards.length;
  
  if(this.pairsGuessed === cardsCount / 2 ){
    return true;
  } 
   return false;
  
};