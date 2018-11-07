var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
  this.shuffleCards = function(){
    for(let i=this.cards.length-1; i>0;i--){
      var j = Math.floor((Math.random()*((i)-0+1)+0))
      var temp = this.cards[j]
      var temp2 = this.cards[i]
      this.cards[i] = temp
      this.cards[j] = temp2
    }
  }
  this.checkIfPair = function(firstCard, secondCard){
    this. pairsClicked++
    if(firstCard === secondCard){
      this.pairsGuessed++
      return true
    }
    else{
      return false
    }
  }
  this.isFinished = function(){
    if(this.pairsGuessed === this.cards.length/2){
      alert("El juego ha terminado")
    } 
  }
};

/*MemoryGame.prototype.shuffleCards = function () {
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};*/
