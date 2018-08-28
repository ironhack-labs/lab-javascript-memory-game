var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};
//https://bost.ocks.org/mike/shuffle/
MemoryGame.prototype.shuffleCards = function shuffle() {
  var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if(firstCard === secondCard){
    this.pairsGuessed++
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
    console.log(this.pairsGuessed == this.cards.length / 2)
  return this.pairsGuessed == this.cards.length / 2;
};