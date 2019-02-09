//constructor
var MemoryGame = function (cards) {
  this.cards = cards; //call an object cards
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed= 0;

};

//take an array of cards, shuffle with Durstenfeld Shuffle algorithm
MemoryGame.prototype.shuffleCards = function () {
    var array= this.cards;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }   
}

//check if cards are pairs
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked +=1 //first to if, a card is clicked
  if(firstCard === secondCard){
    this.pairsGuessed +=1
    return true;
  }else{
    return false;
  }
}

//game finished
MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length/2){
    return true;
  }else{
    return false;
  }
};
  