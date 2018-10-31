var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function () {
  
   var arrayLength =this.cards.length;
     for(var i=0; i<arrayLength-2; i++){
        var randNumer =  Math.floor(Math.random() * arrayLength);  
        console.log(cards[randNumer]);
        var auxSuperHero = this.cards[i];
        this.cards[i] = this.cards[randNumer];
        this.cards[randNumer] = auxSuperHero;
        
     }
     console.log(cards);

};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  var sameCards = false;
  this.pairsClicked++;
  if(firstCard === secondCard){
    sameCards = true;
    this.pairsGuessed++;
  }

  return sameCards;
} 

MemoryGame.prototype.isFinished = function () {

  if((this.cards.length/2) === this.pairsGuessed){
    return true;
  }else{
    return false;
  }

};