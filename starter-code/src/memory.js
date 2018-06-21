var MemoryGame = function (cards) {  //clase
    //Se almacena y contar el las cartas
    this.cards = this.shuffleCard(cards);
    this.pairGuessed =0;
    this.pairClicked =0;
  };
 MemoryGame.prototype.shuffleCard = function (cardsArr) {
cards.forEach(function(){
     var random = Math.floor(Math.random() * cards.lenght); // Número random, shuffle de cartas
     var card = cards.splice[random]//(random,1) //Sacar la carta del la función random.
     var respaldo = cards [0];
     cards[0]=card;
     cards[random]=respaldo;
     });
     return cards;
    }

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairClicked++;
    if (firstCard===secondCard){
        this.pairGuessed++;
        return true;
    } else {
        return false;
    }
}

 MemoryGame.prototype.finished = function () {
        return this.pairGuessed === this.cards.length/2;
 }
 