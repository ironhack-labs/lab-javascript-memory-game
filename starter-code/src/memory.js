var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

// -- To shuffle an array a of n elements (indices 0..n-1):
// for i from n−1 downto 1 do
//      j ← random integer such that 0 ≤ j ≤ i
//      exchange a[j] and a[i]

MemoryGame.prototype.shuffleCards = function () {

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard){
    this.pairsClicked++
    this.pairsGuessed++
    return true
  } else {
    this.pairsClicked++
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed < 7){
    return false 
  } else {
    return true
  }
};