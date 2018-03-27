 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
     };
     

 MemoryGame.prototype.shuffleCard = function (cardsArr) {

    const shuffle = (cardsArr) => { // algoritmo recogido de wikipedia sustituir los valores por el argumento que entra en la función.
        let randomizedDeck = [];
        let array = cardsArr.slice();
        while (array.length !== 0) {
            let rIndex = Math.floor(array.length * Math.random());
          randomizedDeck.push(array[rIndex]);
          array.splice(rIndex, 1)
        }
        return randomizedDeck;
      };
      return (shuffle(cardsArr));
 };


 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

    //The method will add 1 to our pairsClicked property, and if the cards are the same also add 1 to pairsGuessed.
    //Finally it will return true or false depending on the result of comparing both cards.

    if (firstCard == secondCard){
         this.pairsGuessed++; // al estar declarasdas en el padre con el this nos sirve , ya que esta comparación ya esta dentro de un MemoryGame.prototype
         return true;
    }else{
        this.pairsClicked++;
        return false 
    } 
}

 MemoryGame.prototype.finished = function () {
     
    if (this.pairsGuessed == cards.length/2){
        return true;
    }else {
        return false;
    }

 }