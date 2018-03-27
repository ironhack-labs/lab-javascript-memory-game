 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;

 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var shuffle = function (deck) {
        let cardsArr = [];
        let array = deck.slice();
        while (array.length !== 0) {
            let rIndex = Math.floor(array.length * Math.random());
          cardsArr.push(array[rIndex]);
          array.splice(rIndex, 1)
        }
        return cardsArr;
      };
      return shuffle(cardsArr);
 };


 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
     
if (firstCard == secondCard) {
this.pairsGuessed=+1;
    return true;
} else {
    this.pairsClicked=+1;
    return false;
}
 }

 MemoryGame.prototype.finished = function () {
if (this.pairsGuessed.length - this.cards.length == 0){
    return true;
} else {
    return false;
}
 }