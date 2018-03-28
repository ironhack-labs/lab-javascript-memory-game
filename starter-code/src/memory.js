var MemoryGame = function(cards) {
	this.cards = cards;
	this.pickedCards = [];
	this.pairsClicked = 0;
	this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
	const shuffle = (deck) => {
		let cardsArr = [];
		let array = deck.slice();
		while (array.length !== 0) {
			let rIndex = Math.floor(array.length * Math.random());
			cardsArr.push(array[rIndex]);
			array.splice(rIndex, 1);
		}
		return cardsArr;
	};
	return shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
	this.pairsClicked++;
	if (firstCard == secondCard) {
		this.pairsGuessed++;
		return true;
	} else {
		return false;
	}
};


 MemoryGame.prototype.finished = function () {
  //24 cartas - 12 parejas
  if (this.pairsGuessed == 12){
    return true;
  };
  return false;
 };
