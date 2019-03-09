var MemoryGame = function (cards) {

  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;



};


MemoryGame.prototype.shuffleCards = function () {

  this.cards.sort(function () {
    return Math.random() - 0.5;
  });

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {



  if (firstCard === secondCard) {

    this.pairsGuessed++;
    $("#pairs_guessed").html(this.pairsGuessed);

    return true;
  }
  else {


    this.pairsClicked++


    $("#pairs_clicked").html(this.pairsClicked);
    return false;
  }

}

MemoryGame.prototype.isFinished = function () {

  if (this.pairsGuessed != this.cards.length / 2) {
    return false;
  }
  else {
    return true;
  }



};



