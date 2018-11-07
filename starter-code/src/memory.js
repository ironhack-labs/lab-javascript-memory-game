var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
// -- To shuffle an array a of n elements (indices 0..n-1):
// for i from n−1 downto 1 do
//      j ← random integer such that 0 ≤ j ≤ i
//      exchange a[j] and a[i]
  
  var currentIndex = this.cards.length
  var temporaryValue
  var randomIndex

  // While there areelements to shuffle
  while (0 !== currentIndex) {
    // Pick a remaining element
    //j ← random integer such that 0 ≤ j ≤ i
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    // exchange a[j] and a[i]
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }
  // console.log(this.cards)
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1
  if(firstCard === secondCard) {
    this.pairsGuessed += 1
    return true 
  }
  else return false
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === 12) {
    return true
  } else {
    return false
  }
};