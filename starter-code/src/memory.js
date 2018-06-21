

var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var newArray = [];
    var randomNum;
    var randomObj;
  
    while(cardsArr.length != 0){
      randomNum = Math.floor(Math.random()*cardsArr.length);
      randomObj = cardsArr.splice(randomNum,1);  //This is return as an [object]
      newArray.push(randomObj[0]);
    }
    return newArray;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;

    if(firstCard == secondCard){
        this.pairsGuessed++;
        return true;
    } else return false;
}

MemoryGame.prototype.finished = function () {
    if(this.pairsGuessed === 1){
        $('h1').text("Finished");
        $('h1').css("background-color", "green");
        return true;
    }
    else return false;
};
