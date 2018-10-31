var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
 var newArr = [];
 do{
   newArr.push(this.cards.splice(Math.floor(Math.random() * this.cards.length), 1));

 } while (this.cards.length);
 
this.cards = newArr
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed === 8){
  return true
  }
  
  else{
    return false;
  }
};


