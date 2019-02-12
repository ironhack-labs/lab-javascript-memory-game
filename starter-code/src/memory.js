var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {

    var notShuffled = this.cards.length // Las cartas que aún tenemos que barajar (inicialmente, todas)
    var cardToShuffle
    var temporaryValue
  
    while (notShuffled !== 0) { // Sigue habiendo cartas que barajar

      // Escojo una carta al azar de las que no están barajadas
      cardToShuffle = Math.floor(Math.random() * notShuffled);
      notShuffled -= 1;
  
      // Intercambio las posiciones de la carta aleatoria sin barajas y la última carta sin barajar,
      // usando para ello una variable temporal que no tendrá más uso
      temporaryValue = this.cards[notShuffled];
      this.cards[notShuffled] = this.cards[cardToShuffle];
      this.cards[cardToShuffle] = temporaryValue;
    }

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};