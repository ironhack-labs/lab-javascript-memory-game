
 
 
 var MemoryGame = function (cards) {
     this.cards = cards;
     this.pickedCards = [];
     this.pairsClicked = 0;
     this.pairsGuessed = 0;
 };

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
    return _.shuffle(cards)
 };

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

    if (firstCard == secondCard){

        this.pairsClicked ++;
        this.pairsGuessed ++
        return true
    } else {
        this.pairsClicked ++
        return false
    }
 }

 MemoryGame.prototype.finished = function () {

    if (this.pairsGuessed == 12){
        return true
    } else{
        return false
    }

 };

