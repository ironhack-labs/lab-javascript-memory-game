// implementation of shuffle
function shuffle(originalArray) {
  for (let index = originalArray.length - 1; index >= 0; index--) {
    let rand = randomNumber(index);
    let temp = originalArray[index];
    originalArray[index] = originalArray[rand];
    originalArray[rand] = temp;
  }
  return originalArray;
}

// devuelve un numero aleatorio entre 0 y el numero maximo informado (sin incluirlo)
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

var MemoryGame = function(cards) {
  this.cards = cards;
  // array to store cards to compare them
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  shuffle(this.cards);
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  // pairs are the length of array divided by two (each hero has two cards)
  let totalPairs = this.cards.length / 2;
  if (this.pairsGuessed === totalPairs) {
    return true;
  } else {
    return false;
  }
};

var Card = function(cardId, name){
  this.cardId = cardId;
  this.name = name;
}