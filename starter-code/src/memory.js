var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = this.cards.length;
  var temporaryValue;
  var randomIndex;
  console.log(this.cards + "RANDOM");
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
    console.log(this.cards + "RANDOM");
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;;
  if (firstCard === secondCard){
    this.pairsGuessed++;
  }
  return firstCard === secondCard;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == 0){
    return false;
  } else if (this.pairsGuessed < this.cards.length/2){
    return false;
  } else if (this.pairsGuessed == this.cards.length/2){
    return true;
  }
};