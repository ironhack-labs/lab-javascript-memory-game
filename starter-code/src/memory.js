var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;


MemoryGame.prototype.shuffleCard = function (cardsArr) {

  //Create a duplicate to not change the original Array
  var newCardList = [];
  for (i=0; i<cardsArr.length; i++){
    newCardList.push(cardsArr[i])
  }

  var result = [];
  var counter = newCardList.length;
  for (i=0; i<counter; i++){
    var randomSel = Math.floor(Math.random() * newCardList.length);
    result.push(newCardList[randomSel]);
    newCardList.splice(randomSel, 1);  
  }
  return result;


};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;

  if (firstCard == secondCard){
    this.pairsGuessed++;
    return true;
  }
  else{
    return false;
  }

};

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed * 2 <= this.cards.length) {return false};
  return true;
};
}
