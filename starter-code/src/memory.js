function MemoryGame(cards){
  //this.cards = this.shuffleCard(cards);
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}


MemoryGame.prototype.shuffleCard = function (cardsArr) {
  // shuffle cardsArr to newCardsArr
  var newCardsArr = [];
  var n = cardsArr.length;
  for(i = n; i > 0; i--){
    var selectedIndex = Math.floor(Math.random()*10)%i;
    newCardsArr.push(cardsArr[selectedIndex]);
    cardsArr.splice(selectedIndex,1);
  }
  return newCardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard == secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
}

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed == ((this.cards.length)/2)){
    return true;   
  }else{
    return false;
  }
}
