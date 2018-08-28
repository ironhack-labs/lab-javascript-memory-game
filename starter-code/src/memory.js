var MemoryGame = function (arrayOfCards) {
  this.cards = arrayOfCards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
};

MemoryGame.prototype.checkIfPair = function () {
  var firstCard = this.pickedCards[0];
  var secondCard = this.pickedCards[1];
  if (firstCard === secondCard){
    this.pairsGuessed++;
    this.pickedCards = [];
    return true;
  } else {
    this.pairsClicked++;
    this.pickedCards = [];
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === 12){
    $("#win-popup").toggle();
  } else {
    $("#yasss").toggle();
    setTimeout(function(){
      $("#yasss").toggle();
    }, 200);
  }
};

