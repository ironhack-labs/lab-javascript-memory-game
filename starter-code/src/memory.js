var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  let qtd = this.cards.length;
  for(let i = 0; i < qtd; i+= 1){
    let r = Math.floor(Math.random() * qtd);
    let card = this.cards.splice(r,1)[0];
    this.cards.push(card);
  }
  console.log(this.cards);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
if (firstCard === secondCard){
  this.pairsGuessed += 1;
  this.pairsClicked +=1;
}
else {
  this.pairsClicked +=1;
}
}

MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed === this.cards.length/2;
};