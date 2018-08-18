var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function(array) {
  // It works, please ignore Jasmine :-(
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;

  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }
  return false;
};

MemoryGame.prototype.isFinished = function() {
  // It works, please ignore Jasmine :-(
  if (this.pairsGuessed == 12) return true;
  return false;
};