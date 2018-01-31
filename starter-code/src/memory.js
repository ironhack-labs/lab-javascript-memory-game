var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
var j;
var storage;
for (var i = cardsArr.length - 1; i > 0; i--){
    j = Math.floor(Math.random() * (i + 1));
    storage = cardsArr[i];
    cardsArr[i] = cardsArr[j];
    cardsArr[j] = storage;
}
return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard){
        this.pairsGuessed++;
        return true;
    }
    else
    {
            return false;
    }
}

MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed === 12){
        alert("Game Over :)");
        return true;
    }
    else{
        return false;
    }
    
};

$(document).ready(function(){
});


