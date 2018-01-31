var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
     var m= cardsArr.length;
     var t,i;
     while (m){
         // escoge elemento aleatorio de los que quedan
         i = Math.floor(Math.random()*m--);
         // pone en la posicion que estoy del array el aleatorio y en la posicion del aleatorio el que tenia en mi posicion
         t= cardsArr[m];
         cardsArr[m]=cardsArr[i];
         cardsArr[i]=t;
     }
  return cardsArr;
};



 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked+=1;
    console.log("mirando cuantos pares"+this.pairsClicked);
    if (firstCard===secondCard){ this.pairsGuessed+=1; }
    return firstCard===secondCard;
}

MemoryGame.prototype.finished = function () {
    console.log("mirando si 2")
    return this.pairsGuessed === this.length/12;
};
