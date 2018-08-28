var cards = [
	{ name: 'aquaman',         img: 'aquaman.jpg' },
	{ name: 'batman',          img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four',  img: 'fantastic-four.jpg' },
	{ name: 'flash',           img: 'flash.jpg' },
	{ name: 'green arrow',     img: 'green-arrow.jpg' },
	{ name: 'green lantern',   img: 'green-lantern.jpg' },
	{ name: 'ironman',         img: 'ironman.jpg' },
	{ name: 'spiderman',       img: 'spiderman.jpg' },
	{ name: 'superman',        img: 'superman.jpg' },
	{ name: 'the avengers',    img: 'the-avengers.jpg' },
	{ name: 'thor',            img: 'thor.jpg' },
	{ name: 'aquaman',         img: 'aquaman.jpg' },
	{ name: 'batman',          img: 'batman.jpg' },
	{ name: 'captain america', img: 'captain-america.jpg' },
	{ name: 'fantastic four',  img: 'fantastic-four.jpg' },
	{ name: 'flash',           img: 'flash.jpg' },
	{ name: 'green arrow',     img: 'green-arrow.jpg' },
	{ name: 'green lantern',   img: 'green-lantern.jpg' },
	{ name: 'ironman',         img: 'ironman.jpg' },
	{ name: 'spiderman',       img: 'spiderman.jpg' },
	{ name: 'superman',        img: 'superman.jpg' },
	{ name: 'the avengers',    img: 'the-avengers.jpg' },
	{ name: 'thor',            img: 'thor.jpg' }
  ];

function getNameAttribute(el) {
	var cardName = $(el).attr('name');
	var cardNameSplitted = cardName.split(".");
	return cardNameSplitted[0];
}

function showCard(el) {
	$(el).removeClass('back');
	$(el).addClass('front');

	$(el).next().removeClass('front');
	$(el).next().addClass('back');
}

function hiddeCard(el) {
	$(el).removeClass('front');
	$(el).addClass('back');

	$(el).next().removeClass('back');
	$(el).next().addClass('front');
}

function setPairsClicked(totalClicks) {
	$('#pairs_clicked').html(totalClicks);
}

function setPairsGuessed(totalGuessed) {
	$('#pairs_guessed').html(totalGuessed);
}

$(document).ready(function () {
	var memoryGame = new MemoryGame(cards);
	var html = '';
	var counter = 0;
	var firstCard;
	var secondCard;
	var TIME = 1000;

	memoryGame.shuffleCards();

	memoryGame.cards.forEach(function (pic) {
		html += '<div class="card" data-card-name="' + pic.name + '">';
		html += '  <div class="back" name="' + pic.img + '"></div>';
		html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
		html += '</div>';
	});

	// Add all the div's to the HTML
	$('#memory_board').html(html);

	// Bind the click event of each element to a function
	$('.back').click(function (e) {

		if (counter === 0) {
			//show this card
			firstCard = getNameAttribute(this);
			showCard(this);
			counter++;

		} else {
			secondCard = getNameAttribute(this);

			if(memoryGame.checkIfPair(firstCard, secondCard)){

				//hold show this card
				showCard(this);
				counter = 0;

				if(memoryGame.isFinished()){
					alert("WIN :)!");
				}
				
			} else {
				//hidde this card after a time
				showCard(this);

				setTimeout(function() {
					hiddeCard(this);
				}.bind(this), TIME);
			}
		}
	});
});