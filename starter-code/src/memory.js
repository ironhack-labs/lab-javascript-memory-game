var MemoryGame = function (cards) {
  this.cards = cards;
};

MemoryGame.prototype.shuffleCards = function () {

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  this.cards = shuffle(this.cards);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) this.pairsGuessed++;
  return firstCard === secondCard;
};

MemoryGame.prototype.isFinished = function () {
};

MemoryGame.prototype.pickedCards = [];
MemoryGame.prototype.pairsClicked = 0;
MemoryGame.prototype.pairsGuessed = 0;

