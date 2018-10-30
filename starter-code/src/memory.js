
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  
  // First, generate an array with random permutations.
  let randomNumArr = [];
  let totalCards = this.cards.length;
  for (let i = 0; i < totalCards; i++) {
    do {
      rdmCandidate = Math.floor(Math.random()*totalCards)
    } while(randomNumArr.includes(rdmCandidate));
    randomNumArr.push(rdmCandidate)
  }

  //Then, associate our cards, to the random positions given by the generated array.
  let unshuffledCardsArr = [...cards];
  let shuffledCardsArr = [];
  for (i=0; i<randomNumArr.length; i++){
    shuffledCardsArr.push(unshuffledCardsArr[randomNumArr[i]]);
  }
  this.cards = [...shuffledCardsArr]
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  
  this.pairsClicked++
  if (firstCard===secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
  
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length/2) return true;
  return false
};