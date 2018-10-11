var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var myPseudoLength = this.cards.length;

  for (var i = 0; i < this.cards.length; i++) {
    var randomIndex = Math.floor(Math.random() * myPseudoLength);
  
    var swappy = this.cards[randomIndex];
    this.cards[randomIndex] = this.cards[myPseudoLength - 1];
    this.cards[myPseudoLength - 1] = swappy;
    myPseudoLength--;
  }
  return undefined;
};

//vérifier si les 2 cartes sont les mêmes 
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked+=1;
  if (firstCard == secondCard) {
    this.pairsGuessed+=1;
    return true;
  }
  else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsClicked < (this.cards.length/2) ) {
    return false;
  }
  if (this.pairsClicked == (this.cards.length/2)) {
    return true;
  }
};

/*
When the game starts, all tiles are turned face down. 
The player then flips over two cards, 
selecting them by clicking on them. 
If the two tiles have the same image, 
they remain face up. 

Otherwise, the tiles flip back over after a small period 
of time.
The goal of the game is to get all the tiles flipped face up 
in the least number of tries. That means that lower number 
of tries are better scores.
*/
