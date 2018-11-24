var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function(cards) {
  if (cards === undefined) {
    return cards;
  }

  let length = cards.length;

  while (length > 0) {
    //issue random number
    let r = Math.floor(Math.random() * length);
    //decrement
    --length;
    // place current element index in temp var
    let tempVar = cards[length];
    // swap current element in random array index
    cards[length] = cards[r];
    // swap random element in array with current index
    cards[r] = tempVar;
  }
  return cards;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  // Pairs clicked...
  this.pairsClicked++;
  
  // check if pairs are the same
  var checkIfTheSame = Object.is(firstCard, secondCard);
  if (checkIfTheSame) {
    this.pairsGuessed++;
  }
  this.isFinished();
  return checkIfTheSame;
};

MemoryGame.prototype.isFinished = function() {
  var pairs = this.cards.length / 2;
  if (pairs === this.pairsGuessed) {
    return true;
  } else {
    return false;
  }
};
