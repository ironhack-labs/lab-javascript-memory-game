var MemoryGame = function (cards) {
   //Deck de cartas
   this.cards = cards;
   //Arreglo que contiene las cartas elegidas
   this.pickedCards = [];
   //Contador para el número de pares comparados
   this.pairsClicked= 0;
   //Contador para el número de pares encontrados
   this.pairsGuessed = 0;
 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var counter = cardsArr.length;

    // Mientras haya elementos en el array
    while (counter > 0) {
        // Selecciona un index random
        var index = Math.floor(Math.random() * counter);

        // Se resta 1 al contador
        counter--;

        // Intercambia el último elemento
        var temp = cardsArr[counter];
        cardsArr[counter] = cardsArr[index];
        cardsArr[index] = temp;
    }

    return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    //Se aumenta el contador de pares comparados
    this.pairsClicked++;

    //Si la primera carta es igual a la segunda
    if(firstCard === secondCard){
        //Se aumenta el contador de pared adivinados
        this.pairsGuessed++;
        //Regresa true
        return true;
      //Si las cartas comparadas son diferentes
    } else {
        //Regresa false
        return false;
    }
}

 MemoryGame.prototype.finished = function () {
    //Si el tamaño del deck de cartas es igual a 0
    if(this.cards.length === 0){ 
        //Regresa false
        return false;
    }
    //Si el número de pares adivinados es igual al número de pares que hay en el deck
    if(this.pairsGuessed === ((this.cards).length)/2){
        //Regresa true
        return true;
        //Si aún hay pares por adivinar
    } else{
        //Regresa false
        return false;
    }
 };
