 var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards =[];
   this.pairsClicked =0;
   this.pairsGuessed =0;
 };

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var leftInDeck = cardsArr;
    var shuffledCards = [];
if (shuffledCards.length<24);{
    var randomNumber = Math.floor(Math.random()*leftInDeck.length);
    shuffledCards.push(leftInDeck[randomNumber]);
    leftInDeck.splice(randomNumber,1);
}
return shuffledCards;

};
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
this.pairsClicked=this.pairsClicked+1;
that=this
if (that.pickedCards[0]===that.pickedCards[1]){
    this.pairsGuessed=this.pairsGuessed+1; 
}return true;
}

MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed < 12){
var win= false;}
else {var win=true}
return win;
};
