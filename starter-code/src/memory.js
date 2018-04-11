 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards= [];
   this.pairsClicked = 0;
   this.pairsGuessed= 0;

 };

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
    for (var i = cardsArr.length - 1; i >=0; i--){
   var a= Math.floor(Math.random()* i + 1);
   var b= cardsArr [a];

   cardsArr[a]= cardsArr[i];
   cardsArr[i]= b;
 }
 return cardsArr;
};

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard === secondCard){
    this.pairsGuessed+= 1;
    return true;
  } else {
    return false;
  }
 };
 MemoryGame.prototype.finished = function () {
   if (this.cards.length === 0){
    return false
   }
  if (this.pairsGuessed === this.cards.length/2){
  return true;
  }else{
    return false;
  }
};