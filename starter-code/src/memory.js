var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function (array) {

  array = this.cards

  var currentIndex = array.length, temporaryValue, randomIndex;

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



};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 
  if(firstCard === secondCard){
    this.pairsClicked++
    this.pairsGuessed++
    return true
  } else{
    this.pairsClicked++
    return false
  }

}

MemoryGame.prototype.isFinished = function () {

  if (this.cards.length/ 2 === this.pairsGuessed){
    return true
  } else {
    return false
  }

  

};