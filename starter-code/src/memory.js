var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  shuffled = []
  for(i = this.cards.length -1; i >= 0; i--){
    pos = Math.floor(Math.random() * i)
    shuffled.push(this.cards[pos])
    this.cards.splice(pos, 1)
  }
  this.cards = shuffled
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    var isPair = false
    if(firstCard === secondCard){
      isPair = true
      memoryGame.pairsGuessed++
      $("#pairs_guessed").html(memoryGame.pairsGuessed)
    }
    memoryGame.pairsClicked++
    $("#pairs_clicked").html(memoryGame.pairsClicked)
    return isPair

}

MemoryGame.prototype.isFinished = function () {
  var finished = false
  if(this.pairsGuessed == this.cards.length / 2)
  {
    finished = true
  }

  return finished
};