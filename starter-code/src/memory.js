var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
};
//Algoritmo sacado de internet

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
};
MemoryGame.prototype.finished = function() {
  if(this.pairsGuessed == 12){
    return true
  }
    return false
};
