const MemoryGame = function (cards) {
  this.cards = cards.slice();
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  let deck = this.cards.length;
  let card = [];
  
  for(let i=0; i<deck; i++){
  card.push(this.cards.splice(Math.floor(Math.random()*deck),1)[0]);
  this.cards.push(card[i]) 
  }
  console.log(this.cards)
 
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if(firstCard === secondCard){
    this.pairsGuessed += 1;
    return true
  } else {
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed === this.cards.length/2 ? true : false 
};