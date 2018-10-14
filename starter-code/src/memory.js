var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function(array) {
  var result = [];
  console.log(array);
  while (array.length >0) {
    var i = Math.floor(Math.random() * array.length);
    console.log(i);
    result.push(array[i]);
    array.splice(i, 1, array[array.length - 1]);
    array.splice(array.length - 1, 1);
    console.log(array);
    console.log(result);
  }
  return result;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked +=1;
  if(firstCard == secondCard) {
    this.pairsGuessed =+1;
  }
return (firstCard == secondCard);
};

MemoryGame.prototype.isFinished = function() {
  return this.pairsGuessed == this.cards.length /2;
};
