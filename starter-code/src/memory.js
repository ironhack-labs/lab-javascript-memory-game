var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  let length = this.cards.length;
  for(let i = 0; i<length; i++){
    let r = Math.floor(Math.random() * length);
    let card = this.cards.splice(r,1)[0];
    this.cards.push(card);
  }
  console.log(this.cards);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if(firstCard === secondCard){
    this.pairsClicked += 1;
    this.pairsGuessed += 1;
    return true;
}
else{
    this.pairsClicked += 1;
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
return this.pairsGuessed === this.cards.length*(0.5); 
};