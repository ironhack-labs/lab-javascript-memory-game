var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedcards = [];
  this.pairsClicked = [];
  this.pairsGuessed = []
}

MemoryGame.prototype.shuffleCards = function () {

};

function shuffle(array) {
  var m = array.length;
  var t = 0;
  var i = 0;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {}

MemoryGame.prototype.isFinished = function () {};