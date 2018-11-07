var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
  var arr = []
  var r = 0
 
  for (var i=0;i<24;i++){
    r = Math.floor(Math.random()*this.cards.length)
    arr.push( this.cards.splice(r,1))
  }  
  this.cards = arr
 
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if (firstCard === secondCard){
      this.pairsGuessed++
    return true 
  }
  else return false
  
}

MemoryGame.prototype.isFinished = function () {
    if(this.pairsGuessed === 0)
    return false
    if(this.pairsGuessed <12)
    return false
    if(this.pairsGuessed === 12)
    return true


};