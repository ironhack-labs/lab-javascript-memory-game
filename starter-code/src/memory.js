var MemoryGame = function (cards) {
  var self = this;

   self.cards = cards;
   self.pickedCards = [];
   self.pairsClicked = 0;
   self.pairsGuessed = 0;
};

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var self = this;

  newArray = [];

  for (var i = 0; i < cardsArr.length; i++){
    var randomIndex = Math.floor(Math.random() * cardsArr.length); 
    newArray.push(cardsArr[randomIndex]);
  }

  return newArray;

 };

 MemoryGame.prototype.checkIfPair = function () {
  var self = this;

  

  if (self.pickedCards.length == 1){

    self.pairsClicked++

    if(self.pickedCards[0] == self.pickedCards[1]){

      self.pairsGuessed++;
       
    }
  }

   self.pickedCards = [];
  
 }

 MemoryGame.prototype.finished = function () {
  var self = this;
  var isTheGameFinished = false;

  if (self.cards == []){
    return true;
  }

  return isTheGameFinished;

 };