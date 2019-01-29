
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0

};

MemoryGame.prototype.shuffleCards = function(cards) {
  var currentIndex = cards.length, temporaryValue, randomIndex;

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



};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked +=1

  if (firstCard == secondCard){
    this.pairsGuessed +=1
    return true
  }else{
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == 24){
    console.log('game')
  }else{
    return false
  }
};

game = new MemoryGame
