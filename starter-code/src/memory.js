var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked =0;
  this.pairsGuessed =0;
};

MemoryGame.prototype.shuffleCards = function () {
var arr = []
var r= 0
for(var i = 0;i<23;i++){
  r= Math.floor(Math.random()*this.cards.length)
  arr.push(this.cards.splice(r,1))
}
console.log(arr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
this.pairsClicked = this.pairsClicked +1;
if(firstCard === secondCard){
  this.pairsGuessed= this.pairsGuessed +1;
  return true;  
}else return false;

};


MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === 12){
    return true;
  }
  return false;
};