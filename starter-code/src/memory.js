var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    $('#pairs_guessed').html(this.pairsGuessed);
    this.pickedCards = [];
    //opacity here
    //$(this.pickedCards[0]).children().css('opacity', '0');
    //$(this.pickedCards[1]).children().css('opacity', '0'); 


  } else {
    this.pairsClicked++;
    $('#pairs_clicked').html(this.pairsClicked);
    setTimeout(this.flipBackCards.bind(this), 1000);
  }
};

MemoryGame.prototype.flipBackCards = function () {

  this.pickedCards[0].children().toggleClass('front back');
  this.pickedCards[1].children().toggleClass('front back');
  //empty array for next round:
  this.pickedCards = [];
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length / 2) {
    $('#memory_board').html("You won!!");
  }
}