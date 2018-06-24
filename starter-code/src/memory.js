
vvar MemoryGame = function (cards) {
	this.cards = this.shuffleCard(cards);
	this.pairSelected = [];
	this.pairsClicked = 0;
	this.pairsGuessed = 0;
  };
  
  MemoryGame.prototype.shuffleCard = function (cardsArr) {
	  var counter = cardsArr.length;
	  while(counter > 0){
		  var index = Math.floor(Math.random() * counter);
		  counter--;
		  temp = cardsArr[counter];
		  cardsArr[counter] = cardsArr[index];
		  cardsArr[index] = temp;
	  }
	  return cardsArr;
  };
  
  MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
	  this.pairsClicked++;
	  if(firstCard === secondCard) this.pairsGuessed++;
	  return firstCard === secondCard;
  }
  
  MemoryGame.prototype.finished = function () {
	  return this.pairsGuessed === 12;
  };
  
  