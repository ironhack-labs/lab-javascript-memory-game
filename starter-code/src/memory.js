var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
  
  var N = cardsArr.length;
  var cardsToSelect = [];
  var indexOfCards = [];
  var newCardsArray = [];
  var i = 0;

  //Write numbers from 1 to N
  cardsArr.forEach(function(e) {
    indexOfCards.push(i);
    i++;
  });

  //Shuffle algorithim-----------------------------------------
  for (i = 0; cardsToSelect.length < cardsArr.length; i++) {
    //Select a number k between 1 and N
    var randomNum = Math.floor(Math.random() * (N) + 1);
    var selectedNum = N - randomNum;

    if (cardsToSelect.indexOf(indexOfCards[selectedNum]) == -1) {
      cardsToSelect.push(indexOfCards[selectedNum]);
      indexOfCards = indexOfCards.filter(function(e) {
        return e !== indexOfCards[selectedNum];
      });
      N--;
    }
  } //End------------------------------------------------------

  cardsToSelect.forEach(function(elem){
    newCardsArray.push(cardsArr[elem]);
  });

  return newCardsArray;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    if(firstCard === secondCard){
        this.pairsClicked += 1;
        this.pairsGuessed += 1;
        return true;
    }
    else{
        this.pairsClicked += 1;
        return false;
    }
}

MemoryGame.prototype.finished = function () {
    
    //I believe it could be done taking by reference the length of the cards array, for future modifications on the deck. Example, if you want more cards.
    
    //var l = this.cards.length;
    //if(this.pairsGuessed == (l/2)){
    //    return true;
    //}
    //else{
    //    return false;
    //}
    if(this.pairsGuessed == 12){
       return true;
    }
    else{
       return false;
    }
};
