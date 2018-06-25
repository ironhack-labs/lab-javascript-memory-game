// var MemoryGame = function (cards) {
   var MemoryGame = function (cards) {

  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairGuessed = 0;

  this.shuffleCard = function (cardsArr) {
      var j, x, i;
      for (i = cardsArr.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = cardsArr[i];
          cardsArr[i] = cardsArr[j];
          cardsArr[j] = x;
      }
      return cardsArr; 
  }

 this.checkIfPair = function (firstCard, secondCard) {
   if (firstCard == secondCard){
     this.pairGuessed +=1;
     this.pairsClicked +=1;
     return true;
   } else{
     this.pairsClicked +=1;
     return false;
   }
  }

 this.finished = function (cards) {
   if (this.pairGuessed == cards.length/2){
     return true;
   }
  };
  
};
