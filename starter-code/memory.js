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

  // First add the card to the selectedCards
	this.selectedCards.push(card);

  // If it is the second card
	if (this.selectedCards.length === 2) {


    // Save the first and second cards to use them in the HTML&CSS interactions
		var firstCard = this.selectedCards[0].id;
		var secondCard = this.selectedCards[1].id;

    // If the second card matches the first one update the correctPairs value
		if (firstCard === secondCard)	{
			this.correctPairs++;
		}

    // Empty the array and update pairsClicked
		this.pairsClicked++;
		this.selectedCards = [];

		return [ firstCard, secondCard ];
	}
};

// Method for finishing the game, returns true when all the cards have been matched correctly
MemoryGame.prototype.finished = function() {
	if (this.correctPairs === 12) {
		return true;
	}
	return false;
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
	memoryGame = new MemoryGame();

  // Shuffle the cards
	memoryGame._shuffleCards();

  // Create html
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


  // Wait for a click on a card
	$(".back").on("click", function() {
		turnCard(this);
		var playingCards = memoryGame.selectCard(this);

    // If there are two cards selected
		if (memoryGame.selectedCards.length === 0) {

      // If they two cards match remove the front class so they will not turn again
			if (playingCards[0] === playingCards[1]) {
				$(".front.back").toggleClass("front");

      // If the cards don't match, block all the cards during 0.5 seconds so you have time to see both cards
			} else {
				$(".card").children().toggleClass("blocked");
				setTimeout(function() {
					turnCard($(".front.back"));
					$(".card").children().toggleClass("blocked");
				}, 500);
			}
		}
		printPairs();

    // If the game is finished, alert that you have win, and ask to refresh the page
		if (memoryGame.finished()) {
			alert("You won! You tried " + memoryGame.pairsClicked + " times and you got all " +
      memoryGame.correctPairs + " correct! RELOAD THE PAGE TO PLAY AGAIN");
		}
	});

	function turnCard(card) {

    // Toggles the back class from the card. The initial back will be empty and the initial front
    // will have back and front classes. This front back classes will be used to turn the cards back
    // again if they don't match
		$(card).toggleClass("back");
		$(card).siblings().toggleClass("back");
	}

});

function printPairs() {
	$("#pairs_clicked").html(memoryGame.pairsClicked);
	$("#pairs_guessed").html(memoryGame.correctPairs);
}
