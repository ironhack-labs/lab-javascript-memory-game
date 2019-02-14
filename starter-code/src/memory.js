var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};
MemoryGame.prototype.shuffleCards = function () {
  for (i=0; i < this.cards.length; i++) {
    var j = Math.floor(Math.random() * (this.cards.length-i)) + 0  
    this.cards[i] = this.cards[j];
  }
  // - Para mezclar una matriz a de n elementos (índices 0 .. n -1):
  // para  i  de  n -1 downto 1 hacer 
  //     j ← entero aleatorio tal que 0 ≤ j ≤ i 
  //     intercambiamos un [ j ] y una [ i ]

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked = this.pairsClicked + 1;
  
  if (firstCard == secondCard) {
    this.pairsGuessed = this.pairsGuessed + 1;
    return true;
    //ambas cartas mantienen la clase .card .front .blocked
    // el resto de cartas reciben la clase .card .back .blocked para no ser cliclables
    // para que se vean ambas imágenes fijas y
    // el click sobre ellas no tenga ningún evento.
    // se suma 1 a pairs Guessed
  }else {
    // pasados unos segundos 
    // ambas cartas vuelven a la clase .card .back
    // se suman los pairs clickes
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == this.cards.length/2) {
    return true
  } else {
    return false;
  }
  };
  
