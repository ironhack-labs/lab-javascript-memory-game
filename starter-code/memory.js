var MemoryGame = function () {
	this.Cards = [
		{ name: "aquaman", img: "aquaman.jpg" },
		{ name: "batman", img: "batman.jpg" },
		{ name: "captainamerica", img: "captain-america.jpg" },
		{ name: "fantasticfour", img: "fantastic-four.jpg" },
		{ name: "flash", img: "flash.jpg" },
		{ name: "greenarrow", img: "green-arrow.jpg" },
		{ name: "greenlantern", img: "green-lantern.jpg" },
		{ name: "ironman", img: "ironman.jpg" },
		{ name: "spiderman", img: "spiderman.jpg" },
		{ name: "superman", img: "superman.jpg" },
		{ name: "theavengers", img: "the-avengers.jpg" },
		{ name: "thor", img: "thor.jpg" },
		{ name: "aquaman", img: "aquaman.jpg" },
		{ name: "batman", img: "batman.jpg" },
		{ name: "captainamerica", img: "captain-america.jpg" },
		{ name: "fantasticfour", img: "fantastic-four.jpg" },
		{ name: "flash", img: "flash.jpg" },
		{ name: "greenarrow", img: "green-arrow.jpg" },
		{ name: "greenlantern", img: "green-lantern.jpg" },
		{ name: "ironman", img: "ironman.jpg" },
		{ name: "spiderman", img: "spiderman.jpg" },
		{ name: "superman", img: "superman.jpg" },
		{ name: "theavengers", img: "the-avengers.jpg" },
		{ name: "thor", img: "thor.jpg" },
	];
	this.picked_cards = [];
	this.pairs_guessed = 0;
	this._shuffleCard();
};

// this function just takes the array of cards above and shuffles them into a random order
MemoryGame.prototype._shuffleCard = function () {
	var counter = this.Cards.length;

	while (counter > 0) {
		index = Math.floor(Math.random() * counter);
		counter--;
		temp = this.Cards[counter];
		this.Cards[counter] = this.Cards[index];
		this.Cards[index] = temp;
	}
};

var memoryGame;
$(document).ready(function () {
	startGame();
});

function startGame() {
	memoryGame = new MemoryGame();
	memoryGame._shuffleCard();

	for (var i in memoryGame.Cards) {
		$($(".col")[i]).html("<img src='img/" + memoryGame.Cards[i].img + "'>");
		$($(".col")[i]).attr("id", memoryGame.Cards[i].name + [i]);
	}

	setTimeout(function(){$("img").toggle();},3000);

}

function checkCard(id) {
	if (memoryGame.picked_cards.length === 2) {
		if (memoryGame.picked_cards[0].replace(/[0-9]/g, '') === memoryGame.picked_cards[1].replace(/[0-9]/g, '')) {
			memoryGame.picked_cards = [];
			memoryGame.pairs_guessed++;
			if (memoryGame.pairs_guessed == 12) {
				startGame();
			}
		}
		else {
			timeout = setTimeout(function () {
				$("#" + id).children().toggle();
				$("#" + memoryGame.picked_cards[0]).children().toggle();
				memoryGame.picked_cards = [];
				clearTimeout(setTimeout);
			}, 450);
		}
	}
}

$(".col").on("click", function () {
	$(this).children().toggle();
	memoryGame.picked_cards.push(this.id);
	checkCard(this.id);
});
