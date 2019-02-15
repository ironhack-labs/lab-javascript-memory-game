var MemoryGame = function (cards, pickedCards, pairsClicked, pairsGuessed) {
  this.cards = cards;
  this.pickedCards = pickedCards; //array
  this.pairsClicked = pairsClicked; //number
  this.pairsGuessed = pairsGuessed; //number

};

MemoryGame.prototype.shuffleCards = function (cards) {

  var i = 0;
  var cardRandom = [];

  result = generateRandomIndex();


  while (i < result.length) {
    newCard = cards.find(card => cards.indexOf(card) == result[i]);

    cardRandom.push(newCard);

    i++;
  }

  return cardRandom;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked++;
  this.pickedCards.push(firstCard, secondCard);

  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }

  return false;
}

MemoryGame.prototype.isFinished = function () {

  if (this.pairsGuessed != 12) {
    return false;
  }

  return true;

};

function generateRandomIndex() {

  var randomIndex = []
  while (randomIndex.length <= 23) {
    var num = Math.floor(Math.random() * 24);
    if (randomIndex.indexOf(num) === -1) randomIndex.push(num);
  }

  return randomIndex;
}