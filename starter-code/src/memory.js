 var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
 }

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var mixedArr = [];

    var nC = cardsArr.length;

    var i;

        while (nC) {
          i = Math.floor(Math.random() * cardsArr.length);
            if (i in cardsArr) {
              mixedArr.push(cardsArr[i]);
              delete cardsArr[i];
              nC--;
            }
        }

    return mixedArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
     this.pairsClicked  += 1 ;
    
        if(firstCard === secondCard){
            this.pairsGuessed +=1;

            return true;
        }else{
            return false;
        }
}

 MemoryGame.prototype.finished = function () {
     
        if(this.pairsGuessed == 24/2){
            return true;
        }else{
            return false;
        }
};


//Siguiendo JASMINE se hace mas ""facil""" pero aun asi me cuesta empezar y localizar 
// los nombres de los parametros 