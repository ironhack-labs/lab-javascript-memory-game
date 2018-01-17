var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {

    var newArr = cardsArr.sort(function(){

        return 0.5 - Math.random();
    })

    return newArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked += 1;

    if(firstCard == secondCard){
        this.pairsGuessed += 1;
        return true;
    }else{
        return false;
    }
}

MemoryGame.prototype.finished = function () {

    if(this.pairsGuessed == 12){
        alert('YOU WIN!');
        return true;
    }else{
        return false;
    }   
};

