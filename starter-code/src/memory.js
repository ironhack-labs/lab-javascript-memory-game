

function MemoryGame(cards){
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}


 var MemoryGame = function (cards) {
   this.cards = this.shuffleCard(cards);
 };

MemoryGame.prototype.shuffleCard = function (cards) {
  cards.forEach(function(){
    var random = Math.floor(Math.random()*cards.length);
    var card = cards[random];
    var respaldo = cards[0]
    cards[0] = card;
    cards[random] = respaldo;
  });
  return cards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }else {
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === this.cards.length / 2) return true;
};


