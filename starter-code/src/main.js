var cards = [
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' },
	{ name: 'aquaman', img: 'aquaman.jpg' },
	{ name: 'batman', img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four', img: 'fantastic-four.jpg' },
	{ name: 'flash', img: 'flash.jpg' },
	{ name: 'green arrow', img: 'green-arrow.jpg' },
	{ name: 'green lantern', img: 'green-lantern.jpg' },
	{ name: 'ironman', img: 'ironman.jpg' },
	{ name: 'spiderman', img: 'spiderman.jpg' },
	{ name: 'superman', img: 'superman.jpg' },
	{ name: 'the avengers', img: 'the-avengers.jpg' },
	{ name: 'thor', img: 'thor.jpg' }
];

$(document).ready(function() {
	var memoryGame = new MemoryGame(cards);
	memoryGame.cards = memoryGame.shuffleCard(cards);
	var html = '';
	memoryGame.cards.forEach(function(pic, index) {
		html += '<div class= "card" id="card_' + pic.name + '">';
		html += '<div class="back"';
		html += '    name="' + pic.img + '">';
		html += '</div>';
		html += '<div class="front" ';
		html += 'style="background: url(img/' + pic.img + ') no-repeat">';
		html += '</div>';
		html += '</div>';
	});

	// Add all the div's to the HTML
	document.getElementById('memory_board').innerHTML = html;
	var cardCompare = [];

	// Bind the click event of each element to a function
	$('.back').on('click', function() {
		var cardF = $(this).siblings();
		$(this).attr('class', 'front');
		cardF.attr('class', 'back');
		cardCompare.push($(this));
		if (cardCompare.length == 2) {
			$('#pairs_clicked').text(memoryGame.pairsClicked);
			var id1 = cardCompare[0].parent().attr('id');
			console.log(id1);
			var id2 = cardCompare[1].parent().attr('id');
			if (memoryGame.checkIfPair(id1, id2)) {
				$('#pairs_guessed').text(memoryGame.pairsGuessed);
				cardCompare = [];
			} else {
				console.log(cardCompare);
				setTimeout(function() {
					cardCompare[0].removeClass('front').addClass('back');
					cardCompare[0].next().addClass('front').removeClass('back');
					cardCompare[1].removeClass('front').addClass('back');
					cardCompare[1].next().addClass('front').removeClass('back');
					cardCompare = [];
				}, 700);
        $('#pairs_clicked').text(memoryGame.pairsClicked);
        
			}
    }
   
	});
});
