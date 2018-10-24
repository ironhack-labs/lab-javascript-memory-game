const MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  // const deck = [];
  // for (let i = 0; i < this.cards.length; i += 1) {
  //   deck.push(this.cards[Math.floor(Math.random() * this.cards.length)]);
  //   console.log(deck);
  // }
  const deck = this.cards.length;
  for (let i = 0; i < deck; i++) {
    const r = Math.floor(Math.random() * deck);
    const card = this.cards.splice(r, 1)[0];
    this.cards.push(card);
  }
  console.log(this.cards);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  }
  return false;
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  }
  return false;
};


// const randomProperty = function (obj) {
//   const keys = Object.keys(obj);
//   return obj[keys[keys.length * Math.random() << 0]];
// };
