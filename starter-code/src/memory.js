var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = this.cards.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if(firstCard.attr("name") === secondCard.attr("name")){
    this.pairsClicked++;
    this.pairsGuessed++;
    return true;
  }else{
    this.pairsClicked++;
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length/2){
    this.shuffleCards();
    alert("you win")
    return true;
  }else{
    return false;
  }
};