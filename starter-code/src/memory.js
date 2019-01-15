var MemoryGame = function (cards) {
  this.cards = cards;
  this.shuffled = []
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for(i = this.cards.length -1; i >= 0; i--){
    pos = Math.floor(Math.random() * i)
    this.shuffled.push(this.cards[pos])
    this.cards.splice(pos, 1)
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    var quieroPasarJasmine = false
    if($(memoryGame.pickedCards[0]).attr("name") === $(memoryGame.pickedCards[1]).attr("name")){
      memoryGame.pairsGuessed++
      $("#pairs_guessed").html(memoryGame.pairsGuessed)
      quieroPasarJasmine = true
    }else{
      blockCard(memoryGame.pickedCards[0])
      blockCard(memoryGame.pickedCards[1])
      flipCard(memoryGame.pickedCards[0])
      flipCard(memoryGame.pickedCards[1])
      
    }
      memoryGame.pairsClicked++
      $("#pairs_clicked").html(memoryGame.pairsClicked)
      memoryGame.pickedCards = []
      return quieroPasarJasmine

}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed == this.shuffled / 2)
  {
    alert("You Won!!!")
  }
};