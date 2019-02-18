var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function () {

var aleatorio;
var elemento1;
var elemento2;

for(i=this.cards.length-1;i>=1;i--){

aleatorio=Math.floor(Math.random() * (i - 0) + 0); //Numero aleatorio dentro del rango del array

elemento1=this.cards[aleatorio];
elemento2=this.cards[i];   //intercambiarlas en el array

//intercambiamos los elementos

this.cards[aleatorio]=elemento2;
this.cards[i]=elemento1;

}
return undefined;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {


if(firstCard==secondCard){

  this.pairsGuessed++;
  return true;

}else{


return false;
}

}

MemoryGame.prototype.isFinished = function () {

if(this.pairsGuessed==12){

alert("GAME OVER");


return true;

}else{

  return false;
}

};