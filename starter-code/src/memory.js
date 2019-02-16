var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0 
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
  var m = this.cards.length, t, i;
  // While there remain elements to shuffle…
  while (m) { //haz esto n veces. -> 10 || -> 9
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--); //encuentra un random de n -> 5 || -> 8
    // And swap it with the current element.
    t = this.cards[m]; // t = elem(10) || t = elem(9)
    this.cards[m] = this.cards[i]; // elem(10) = elem(5) || elem(9) = elem(8)
    this.cards[i] = t;  //elem(5) = elem(10) || elem(8) = elem(9)
  }
  // En la primera vuelta, el elemento 10 toma la posición 5 
    // mientras que el elemento 5 toma la posición 10 
  // en la segunda vuelta, el elemento 9 toma la posición 8
    //mientras que el elemento 8 toma la posición 9. 
  // de esta forma no importa que el número random se repita.

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;  
  if (firstCard == secondCard){
    this.pairsGuessed ++;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed == this.cards.length/2){
    return true;
  } else {
    return false;
  }
};