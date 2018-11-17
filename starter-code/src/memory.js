var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = ["1,2,3,4"];
  this.pairsClicked = ["1,2,3,4"];
  this.pairsGuessed = ["1,2,3,4"];
  this.pairsClicked =2;
  this.pairsGuessed=2;
};

MemoryGame.prototype.shuffleCards = function () {
  return undefined;
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  
}

MemoryGame.prototype.isFinished = function () {
};