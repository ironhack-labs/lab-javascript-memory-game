var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  //this.cards.sort(function() { return 0.5 - Math.random() });
  //console.log(this.cards);
  for (i = 0; i < this.cards.length; i++) { 
    var cardMixed = Math.floor(Math.random() * (this.cards.length -i));
    this.cards[i] = this.cards[cardMixed];
  }
  /* this.cards.sort(function(){
    this.cards( Math.random() *  - 0.5)
  }); */

 
    //return (Math.round(Math.random())-0.5);

  //Esto te coge una carta aleatoria
  //this.cards = this.cards[Math.floor(Math.random() * this.cards.length)];
  //console.log(this.cards)
  //return undefined;

  /* var currentIteration = this.cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIteration) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIteration);
    currentIteration -= 1;

    // And swap it with the current element.
    temporaryValue = this.cards[currentIteration];
    this.cards[currentIteration] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }

  return this.cards; */

  /* var m = myCards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = myCards[m];
    myCards[m] = myCards[i];
    myCards[i] = t;
  }

  return myCards; */
};

  


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};