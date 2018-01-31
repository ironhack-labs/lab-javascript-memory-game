var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
var newArray = [];
var length = cardsArr.length; // creamos una variable para almacenar el length original de cardsArr porque a cardsArr, le vamos ir eliminando elementos y su length va a cambiar, entonces eso cambiara las iteraciones del for a menos veces..
for (var i=0; i<length ; i++){
    var numberRandom = Math.floor(Math.random()* cardsArr.length)
    console.log(numberRandom);
newArray.push(cardsArr[numberRandom]) // el primer elemento va sacar un elemento random, del array orginal,
cardsArr.splice(numberRandom,1);
}

cardsArr = newArray;

return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    
    this.pairsClicked = this.pairsClicked + 1;  // this como si era MemoryGame, es Este ! 

    if(firstCard === secondCard) {
        this.pairsGuessed = this.pairsGuessed + 1;
        return true;
        
    } else {
        return false
    }
}

MemoryGame.prototype.finished = function () {
    if (this.cards.length === 0) return false; // para que si el juego todavia no ha puesto cartas, que devuelva false : no ha terminado el juego
    if (this.pairsGuessed === this.cards.length/2) { // cuando el numero de pares adivinados = numero total de cartes / 2 , ahi termina el juego
        return true;
    } else {
        return false;
    }
};
