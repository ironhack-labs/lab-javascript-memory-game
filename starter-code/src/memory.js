var MemoryGame = function (cards) {
  this.cards 		=cards;
  this.pickedCards	=[];
  this.pairsClicked	=0;
  this.pairsGuessed	=0;
};

MemoryGame.prototype.shuffleCards = function () { 
	for(let j, x, i = this.cards.length; i; j = parseInt(Math.random() * i), x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x); 
	return;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
	this.pairsClicked++;
	this.pairsGuessed+=firstCard==secondCard;
	return firstCard==secondCard;
}

MemoryGame.prototype.isFinished = function () {
	return this.pairsGuessed === this.cards.length/2;
};