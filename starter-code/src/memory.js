var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var newArr = cardsArr;

  for (i = 0; i < newArr.length; i++) {
    var randNumber = Math.floor(Math.random() * i);
    var temp = newArr[i];

    newArr[i] = newArr[randNumber];
    newArr[randNumber] = temp;
  }
  return newArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  var me = this;
  if (this.checkTurn()) {
      this.pairsClicked++
    if (firstCard.attr('name') === secondCard.attr('name')) {
      this.pairsGuessed++
      this.pickedCards[0].addClass('front.blocked');
      this.pickedCards[1].addClass('front.blocked');
      this.pickedCards = [];
      return true;
    }
    setTimeout(function () {
      me.flipCard(me.pickedCards[0]);
      me.flipCard(me.pickedCards[1]);
      me.pickedCards = [];
      return false;
    }, 1500);
  }
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === (this.cards.length / 2)) {
    return true;
  }
  return false;
}

MemoryGame.prototype.checkTurn = function () {
  if (this.pickedCards.length === 2 ) { return true; }
  return false;
}

MemoryGame.prototype.flipCard = function (card) {
  card.toggle();
  card.siblings().toggle();
}
