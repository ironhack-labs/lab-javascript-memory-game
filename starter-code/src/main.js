var cards = [{
	name: 'aquaman',
	img: 'aquaman.jpg'
}, {
	name: 'batman',
	img: 'batman.jpg'
}, {
	name: 'captain america',
	img: 'captain-america.jpg'
}, {
	name: 'fantastic four',
	img: 'fantastic-four.jpg'
}, {
	name: 'flash',
	img: 'flash.jpg'
}, {
	name: 'green arrow',
	img: 'green-arrow.jpg'
}, {
	name: 'green lantern',
	img: 'green-lantern.jpg'
}, {
	name: 'ironman',
	img: 'ironman.jpg'
}, {
	name: 'spiderman',
	img: 'spiderman.jpg'
}, {
	name: 'superman',
	img: 'superman.jpg'
}, {
	name: 'the avengers',
	img: 'the-avengers.jpg'
}, {
	name: 'thor',
	img: 'thor.jpg'
}, {
	name: 'aquaman',
	img: 'aquaman.jpg'
}, {
	name: 'batman',
	img: 'batman.jpg'
}, {
	name: 'captain america',
	img: 'captain-america.jpg'
}, {
	name: 'fantastic four',
	img: 'fantastic-four.jpg'
}, {
	name: 'flash',
	img: 'flash.jpg'
}, {
	name: 'green arrow',
	img: 'green-arrow.jpg'
}, {
	name: 'green lantern',
	img: 'green-lantern.jpg'
}, {
	name: 'ironman',
	img: 'ironman.jpg'
}, {
	name: 'spiderman',
	img: 'spiderman.jpg'
}, {
	name: 'superman',
	img: 'superman.jpg'
}, {
	name: 'the avengers',
	img: 'the-avengers.jpg'
}, {
	name: 'thor',
	img: 'thor.jpg'
}];

$(document).ready(function () {
	var memoryGame = new MemoryGame(cards);
	memoryGame.shuffleCards(cards);
	var html = '';
	var c1 = '';
	var c2 = '';
	memoryGame.cards.forEach(function (pic) {
		html += '<div class="card" data-card-name="' + pic.name + '">';
		html += '  <div class="back" name="' + pic.img + '"></div>';
		html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
		html += '</div>';
	});

	// Add all the div's to the HTML
	$('#memory_board').html(html);

	// Bind the click event of each element to a function
	$('.back').click(function () {
		$(this).toggleClass("back front");
		$($(this).next()).toggleClass("front back");
		if (memoryGame.pickedCards.length === 0) {
			c1 = ($(this).parent().index());
			memoryGame.pickedCards.push($(this).attr('name'));
		} else if (memoryGame.pickedCards.length === 1) {
			c2 = ($(this).parent().index());
			memoryGame.pickedCards.push($(this).attr('name'));
			var firstCard = memoryGame.pickedCards[0];
			var secondCard = memoryGame.pickedCards[1];
			
			if (!memoryGame.checkIfPair(firstCard, secondCard)) {
				/* Disable click
				Let non-pair cards turn before clicking new card
				*/
				$(".back").css("pointer-events", "none"); 
				setTimeout(function () {
					$(".card").eq(c2).children("div").toggleClass("front back");
					$(".card").eq(c1).children("div").toggleClass("front back");
					$(".back").css("pointer-events", "auto"); // Enable click on all cards
				}, 900);
				
			}			
			$("#pairs_clicked").html(memoryGame.pairsClicked);
			$("#pairs_guessed").html(memoryGame.pairsGuessed);
			///// Returns: DOM Element
			// console.log($(".card").get(c1).getAttribute("data-card-name")); 	

			///// Returns: jQuery
			// console.log($(".card").eq(c2).attr("data-card-name")); 
			// console.log($(".card").eq(c2).children("div").first().attr("name")); 

			memoryGame.pickedCards = [];
			memoryGame.isFinished();
		}
	});
});
