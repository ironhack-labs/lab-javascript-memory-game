 var MemoryGame = function (cards) {
this.cards = cards;
this.pickedCards =[]; 
this.pairsClicked=0;
this.pairsGuessed=0;
 };

 []
 MemoryGame.prototype.shuffleCard = function (cardsArr) {
 var i=cardsArr.length,j,temp;
   while(i>0){
       i--;
       j=Math.floor(Math.random()*(i+1));
       temp=cardsArr[j];
       cardsArr[j]=cardsArr[i];
       cardsArr[i]=temp;
   }
   return cardsArr;
 };
 
 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 this.pairsClicked++;
 if(firstCard === secondCard){
    this.pairsGuessed++;
    return true;
 }else{
    
     return false;
 }
 }
 
 MemoryGame.prototype.finished = function () {
 if(this.pairsGuessed===this.cards.length/2){
 return true;
 }else{
 return false;  
 }
 };