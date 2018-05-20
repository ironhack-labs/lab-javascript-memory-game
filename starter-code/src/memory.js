var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards =[];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
for(var i = cardsArr.length-1; i > 0; i--){
  var newIndexCards = (Math.floor(Math.random()*i+1));
  [cardsArr[i],cardsArr[newIndexCards]] = [cardsArr[newIndexCards],cardsArr[i]];
} 
return cardsArr; 
// j ← random integer such that 0 ≤ j ≤ i
//      exchange a[j] and a[i]
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard === secondCard){
  this.pairsGuessed++;
  return true;
    }return false;    
}
MemoryGame.prototype.finished = function () {
       if(this.pairsGuessed === 12){
          return true;
       }return false;
};
