var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
  const shuffle = cardsArr => {
    let randomizedDeck = [];
    let array = cardsArr.slice();
    while (array.length !== 0) {
      let rIndex = Math.floor(array.length * Math.random());
      randomizedDeck.push(array[rIndex]);
      array.splice(rIndex, 1);
    }
    return randomizedDeck;
  };
  return shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function(card1, card2) {
  this.pairsClicked++;
  if (card1 === card2) {
    this.pairsGuessed++;
    return true;
  } else return false;
};

MemoryGame.prototype.finished = function() {
  if (this.pairsGuessed === 0) return false;
  if (this.pairsGuessed === this.cards.lenght / 2) return true;
  return false;
};
MemoryGame.prototype.pairsClicked = function(){
    return this.pairsClicked;
}
MemoryGame.prototype.pairsGuessed = function(){
    return this.pairsGuessed;
}