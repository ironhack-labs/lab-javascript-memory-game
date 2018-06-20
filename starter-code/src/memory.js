// var MemoryGame = function (cards) {
//   this.cards = cards;
// };
function MemoryGame(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = [];
  this.pairsGuessed = [];
}

MemoryGame.prototype.shuffleCards = function () {
  return _.shuffle(this.cards);
};
//creo que es mas eficiente escoger un numero de cartas aleatoriamente de un 
//array que escojer un numero de cartas ordanadamente de un array ya aleatoriamente
//ordenado. Por ello, en el futuro, si me da tiempo creo que hay que cambiar la lógica 
//para hacerlo asi.
//tambien he cambiado en que pickedCards no almacena objetos cards sino elementos esto es debido a que necesito almacenar la variable x e y para que no se repitan pulsaciones.
//Esto yo creo que es un fallo grande de la implementacion. 

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked.push([firstCard, secondCard]);
  this.pickedCards = [];
  if (firstCard.name === secondCard.name) {
    this.pairsGuessed.push([firstCard, secondCard]);
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.finished = function () {
  return this.pairsGuessed.length === this.cards.length;
};

MemoryGame.prototype.bufferCard = function (e) {
  if (this.pickedCards.length) {
    if ((this.pickedCards[0].x != e[0].x) &&
      (this.pickedCards[0].y != e[0].y))
      return this.pickedCards.push(e); //2=true
    return false;
  }
  return this.pickedCards.push(e) - 1; //1-1=0=false
}
