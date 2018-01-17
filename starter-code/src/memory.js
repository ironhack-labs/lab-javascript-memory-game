var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;

 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
      
       for(var i = cardsArr.length; i > 0 ; i-- ){
          var j = Math.floor(Math.random() * (i + 1));
          var temp = cardsArr[i];
          cardsArr[i] = cardsArr[j];
          cardsArr[j] = temp;
       }

       return cardsArr;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

    var iguales = false;

    this.pairsClicked += 1;

    if(firstCard === secondCard){

        this.pairsGuessed += 1;
        iguales = true;
    }

    return iguales;

}

 MemoryGame.prototype.finished = function () {

      var final = false;

      //if(this.pairsGuessed > 0 && this.cards.length > 0){

          //final = (this.pairsGuessed ===   (this.cards.length/2));
          final = (this.pairsGuessed ===   12);
      //}
      return final;
 };
