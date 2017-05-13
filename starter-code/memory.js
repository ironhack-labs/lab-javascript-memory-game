// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
	this.cards = [
    { name: "aquaman",         img: "aquaman.jpg" },
    { name: "batman",          img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four",  img: "fantastic-four.jpg" },
    { name: "flash",           img: "flash.jpg" },
    { name: "green arrow",     img: "green-arrow.jpg" },
    { name: "green lantern",   img: "green-lantern.jpg" },
    { name: "ironman",         img: "ironman.jpg" },
    { name: "spiderman",       img: "spiderman.jpg" },
    { name: "superman",        img: "superman.jpg" },
    { name: "the avengers",    img: "the-avengers.jpg" },
    { name: "thor",            img: "thor.jpg" },
    { name: "aquaman",         img: "aquaman.jpg" },
    { name: "batman",          img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four",  img: "fantastic-four.jpg" },
    { name: "flash",           img: "flash.jpg" },
    { name: "green arrow",     img: "green-arrow.jpg" },
    { name: "green lantern",   img: "green-lantern.jpg" },
    { name: "ironman",         img: "ironman.jpg" },
    { name: "spiderman",       img: "spiderman.jpg" },
    { name: "superman",        img: "superman.jpg" },
    { name: "the avengers",    img: "the-avengers.jpg" },
    { name: "thor",            img: "thor.jpg" }
	];
	this.selectedCards = [];
	this.pairsClicked = 0;
	this.correctPairs = 0;
};

MemoryGame.prototype._shuffleCards = function() {
	var newCards = [];

  // The original length is saved because we are going to remove elements from the original array
  // but we want to iterate as many times as elements in the original array
	var originalLength = this.cards.length;
	for (var i = 0; i < originalLength; i++) {
		newCards[i] = this.cards[Math.floor(Math.random() * this.cards.length)];
		this.cards.splice(this.cards.indexOf(newCards[i]), 1);

	}
	this.cards = newCards;
};

// Method for selecting a card
MemoryGame.prototype.selectCard = function(card) {

  // If it is the first card, just add it to the array
	if (this.selectedCards.length === 0) {
		this.selectedCards.push(card);

  // If it is the second card, check if it matches the first one (if so update the correctPairs value
  // empty the array and update pairsClicked
	} else {
		if (this.selectedCards[0] === card)	{
			this.correctPairs++;
		}
		this.pairsClicked++;
		this.selectedCards = [];
	}
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
	memoryGame = new MemoryGame();
	var html = "";

	memoryGame.cards.forEach(function(pic, index) {
		var sanitizedName = pic.name.split(" ").join("_");

		html += "<div class= \"card\" id=\"card_" + sanitizedName + "\">";
		html += "<div class=\"back\"";
		html += "    name=\"img/" + pic.name + "\"";
		html += "    id=\""       + pic.img +  "\">";
		html += "</div>";
		html += "<div class=\"front\" ";
		html += "style=\"background: url(img/" + pic.img + "\") no-repeat\"";
		html += "    id=\""       + pic.img +  "\">";
		html += "</div>";
		html += "</div>";
	});

  // Add all the divs to the HTML
	document.getElementById("memory_board").innerHTML = html;

  // Shuffle the cards
	memoryGame._shuffleCards();

  // Wait for a click on a card
  // It is done in such a way that the event would propagate to any .card that has .back class
  // even if it didn't have this class when the DOM was loaded. This behaviour is not needed
  // and in fact it will be blocked with the turnCard function, but I wanted to try
	$(".card").on("click", ".back", function() {
		memoryGame.selectCard(this);
		turnCard(this);
		blockCard(this);
		if (memoryGame.selectedCards.length === 0) {

			setTimeout(function() {
				turnCard($(".blocked.back"));
				$(".blocked").toggleClass("blocked");
				printPairs();
			}, 1000);
		}
	});

	function turnCard(card) {

    // Change classes from front to back and viceversa, so the card is turned
		$(card).toggleClass("back");
		$(card).toggleClass("front");
		$(card).siblings().toggleClass("back");
		$(card).siblings().toggleClass("front");
	}

});

function blockCard(card) {

  // Blocks the siblings of the card, so it will not trigger an event if clicked again
	$(card).toggleClass("blocked");
	$(card).siblings().toggleClass("blocked");
}

function printPairs() {
	$("#pairs_clicked").html(memoryGame.pairsClicked);
	$("#pairs_guessed").html(memoryGame.correctPairs);
}
