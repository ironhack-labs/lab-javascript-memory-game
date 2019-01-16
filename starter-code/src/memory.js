var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = ['', ''];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  let indexesArr = [];
  let orderedCards = [];
  let cardsCopy = this.cards;

  for(let i = 0; i < this.cards.length; i++){
    indexesArr[i] = i;
  }

  for(let i = 0; i < this.cards.length; i++)
  {
    r = Math.floor(Math.random() * indexesArr.length);
    orderedCards[i] = indexesArr[r];
    indexesArr.splice(r, 1);

    this.cards[i] = cardsCopy[orderedCards[i]];
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if(firstCard === secondCard){
    this.pairsGuessed += 1;
    return true;
  }
  else{
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length/2)
  {
    return true;
  }
  else{
    return false;
  }
};