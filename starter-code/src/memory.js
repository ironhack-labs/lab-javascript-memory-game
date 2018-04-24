var MemoryGame = function (cards) {
	this.cards = cards;
	this.currentPair = [];
	this.pairsClicked = 0;
	this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
	// var shuffledArray = [];
	// cardsArr.forEach(function(theCard, theIndex){
	// 	var randomCardIndex = Math.floor(Math.random() * cardsArr.length);
	// 	shuffledArray.push(cardsArr[randomCardIndex]);
	// 	cardsArr.splice(randomCardIndex, 1);
	// });
	// return shuffledArray;
	// this.cards = shuffledArray;

	this.cards = _.shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
	this.pairsClicked++;
	$('#pairs_clicked').text(this.pairsClicked);
	$('.back').addClass('blocked');

	if(firstCard === secondCard) {
		$('.just-clicked').addClass('permaBlocked');	
		this.pairsGuessed++;
		$('#pairs_guessed').text(this.pairsGuessed);
		$(".just-clicked").removeClass("just-clicked");
		$('.back').removeClass('blocked');
	} else {
		setTimeout(function(){
			$('.just-clicked').css("background", "#456783");
			$(".just-clicked").removeClass("just-clicked");
			$('.back').removeClass('blocked');
		},1000);	
	}

	this.currentPair = [];	
	this.finished();
}

MemoryGame.prototype.finished = function () {
	if(this.pairsGuessed > 11) {
		alert("Yay, you won!");
	}
};