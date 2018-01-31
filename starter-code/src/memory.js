// Memory game constructor object
// cards is a parameter with own
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var counter = cardsArr.length;
  var temp;
  var index;
  // While there are elements in the array
  while (counter > 0) {
     // Pick a random index
     index = Math.floor(Math.random() * counter);
     // Decrease counter by 1
     counter--;
     // And swap the last element with it
     temp = cardsArr[counter];
     cardsArr[counter] = cardsArr[index];
     cardsArr[index] = temp;
   }
   return cardsArr;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  //increment pairs clicked
  this.pairsClicked++;
  //conditional to see if cards match
  if(firstCard === secondCard){
    //increment pairs up when matched
    this.pairsGuessed++;
    return true;
  } else{
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  //function finished is true if
  //pairs is equal to 12
  if(this.pairsGuessed === 12){
    return true;
  } else {
    // returns false until pairsGuessed
    // is equal to 12
    return false;
  }
};
