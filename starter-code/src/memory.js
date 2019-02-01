// class MemoryGame{
//   constructor(cards) {
//       this.cards = cards;
//   }



var MemoryGame = function () {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
  this.firstCard;
  

  
  // this.pickedCards.push($(this).attr('name'));
};
 


MemoryGame.prototype.shuffleCards = function () {
  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  console.log(firstCard, this.firstCard);
}

MemoryGame.prototype.isFinished = function () {
};

