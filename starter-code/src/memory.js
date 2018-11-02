var MemoryGame = function (cards) {
  this.cards = cards
  this.pickedCards = 0;
  this.firstCard=''
  this.secondCard=''
  this.previousCard = ''
  this.pairsClicked = 0;
  this.pairsGuessed = 0;

};

MemoryGame.prototype.shuffleCards = function () {
  var unshuffled=cards;
  var y =cards.length;
  var shuffled = [];
  for (let i=0; i<y; i++) {
    var x = Math.floor(Math.random()*(unshuffled.length));
    shuffled[i]=unshuffled[x];
    unshuffled.splice(x, 1);
  }
  this.cards=shuffled;
};

MemoryGame.prototype.checkIfPair = function () {
  this.pickedCards = 0;
    if ($(this.firstCard).attr('name')===$(this.secondCard).attr('name')) {
    this.pairsGuessed++;
    return true;
  } else {return false;}

}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed===cards.length/2) {
    return true;
  } else {return false;}
};