 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards=[];
   this.pairsClicked=[];
   this.pairsGuessed=[];
 };

 MemoryGame.prototype.shuffleCard = function (cardsArr) {
  
    return _.shuffle(cardsArr);
 };

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked ++;
    if (firstCard == secondCard){
        this.pairsGuessed ++;
        return true;
    }else {
        return false};
 }

 MemoryGame.prototype.finished = function () {
    if(this.pairsGuessed === 12)
    {
             
         return true;
        
     }
     return false;
 };
