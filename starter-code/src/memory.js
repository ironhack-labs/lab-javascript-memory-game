 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
 };

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
    return _.shuffle(cardsArr);
 };

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if(firstCard == secondCard) {
        this.pairsGuessed++;
        return true;
    } return false;
 }

 MemoryGame.prototype.finished = function () {
    if(this.pairsGuessed == 12) {
        return alert("You win");
    } return false;
 };
