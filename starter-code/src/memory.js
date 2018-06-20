 var MemoryGame = function (cards) {
   this.cards = this.shuffleCard(cards);
   this.pickedCards = [function(){}];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;

 };


 MemoryGame.prototype.shuffleCard = function (cardsArr) {
    cards.forEach(function(){
    	var random = Math.floor(Math.random() * cards.length);
 		var card = cards[random];
 		var respaldo = 	cards[0];
 		cards[0] = card;
 		cards[random]=respaldo;
    });   	
    
    return cards;
   
	};

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 	//this.pairsClicked++;
 	//if (firstCard === secondCard){
 	//	this.pairsGuessed++;
 	//	return true;	
 //} else {

 };

 MemoryGame.prototype.finished = function () {

 };
