var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  
  var m = this.cards.length, t, i;

  //while there remain elements to shuffle...
  while (m) {
    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t; 
  }
  return this.cards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
    $('#pairs_guessed').html(this.pairsGuessed);
    this.pickedCards = [];
  } else {
    return false;
    setTimeout (this.flipCardsBack.bind(this), 5000);
  }
  $('#pairs_clicked').html(this.pairsClicked);
}

MemoryGame.prototype.isFinished = function () {
  if (this.cards.length / 2 === this.pairsGuessed) {
    return true;
  } else {
    return false
  }
};

MemoryGame.prototype.flipCardsBack = function () {
  this.pickedCards[0].children().toggleClass('front back');
  this.pickedCards[1].children().toggleClass('front back');
  this.pickedCards = [];
}