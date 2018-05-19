let MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {

  for(let i=0; i < cardsArr.length; i++)
  {
    let randomNumber = Math.random();            // Random decimal [0.0 - 1.0)
    randomNumber = randomNumber * cardsArr.length; // Random decimal [0.0 - 6.0)
    randomNumber = Math.floor(randomNumber);     // Random integer [0   - 5]

    if(i != randomNumber){
      let temp = cardsArr[i];
      cardsArr[i] = cardsArr[randomNumber];
      cardsArr[randomNumber] = temp;
    }
  }

  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard == secondCard)
  {
    this.pairsGuessed++;
    return true;
  }
  else
  {
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed < 12)
  {
    return false;
  }
  else
  {
    return true;
  }
};
