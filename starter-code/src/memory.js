var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if(firstCard === secondCard){
     this.pairsGuessed += 1 ;
     this.pairsClicked += 1;
     this.pickedCards.push(firstCard);
     this.pairsClicked.push(secondCard);
  }
  else{
      this.pairsClicked += 1;
  }

}

MemoryGame.prototype.isFinished = function () {
};




function shuffle(array) {
  
}