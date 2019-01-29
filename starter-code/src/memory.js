
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0

};

MemoryGame.prototype.shuffleCards = function(c) {
  MemoryGame.prototype.shuffleCards = function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };



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
