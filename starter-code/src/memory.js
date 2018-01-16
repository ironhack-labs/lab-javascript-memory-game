var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  };

MemoryGame.prototype.shuffleCard = function(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
   this.pairsClicked = this.pairsClicked + 1;
   if (firstCard == secondCard){
       this.pairsGuessed = this.pairsGuessed + 1;
       return true 
   }else {
       return false
   }

};

MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed == 0 && this.pickedCards == 0){
        return false;
    }

    if (this.pairsGuessed == 12) {
      return true;
    } else {
      return false;
    }
    
    
};
