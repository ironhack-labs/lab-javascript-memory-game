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
$(document).ready(function(){
  
  
	var placeCards = function(){
		var html = '';
		cards.forEach(function (pic, index) {
			html += '<div class= "card" id="card_' + pic.name + '">';
			html += '<div class="back"';
			html += '    name="'       + pic.img +  '">';
			html += '</div>';
			html += '<div class="front" ';
			html += 'style="background: url(img/' + pic.img + ') no-repeat">';
			html += '</div>';
			html += '</div>';
			$('#memory_board').html(html);
	  });
	  // Add all the div's to the HTML
	  document.getElementById('memory_board').innerHTML = html;
	  
	  $('.back').on('click', function () {
			/*console.log($(this).parent().attr('id'));
			var cardName = $(this).parent().attr('id');
			console.log($('#' + cardName));
			$('#' + cardName).eq(0).toggleClass('back');*/
			
			$(this).toggle();
			$(this).parent().find('.front').toggle();
			
			myGame.arrComp.push($(this));
			console.log(myGame.arrComp);
			
			if(myGame.arrComp.length == 2){
				var result = myGame.checkIfPair(myGame.arrComp[0], myGame.arrComp[1]);
				$('#pairs_clicked').text(myGame.pairsClicked);
				$('#pairs_guessed').text(myGame.pairsGuessed);
	
				
				if(!result){
					setTimeout( function() {
					myGame.arrComp[0].toggle();
					myGame.arrComp[0].parent().find('.front').toggle();
					myGame.arrComp[1].toggle();
					myGame.arrComp[1].parent().find('.front').toggle();
					myGame.arrComp = [];
					}, 1000);
				}
				else{
				
				myGame.arrComp = [];
				}
			}
	});
	
  }

	/*
	<div class= "card" id="card_' + pic.name + '">'
		<div class="back"' name="'       + pic.img +  '"> </div>
		<div class="front" style="background: url(img/' + pic.img + ') no-repeat">'	</div>';
	</div>'
	
	*/
	
	var MemoryGame = function (cards) {
	   this.cards = cards;
	   this.pairsClicked = 0;
	   this.pairsGuessed = 0;
	   this.arrComp = [];
	};

	MemoryGame.prototype.shuffleCard = function () {
		
		var array = this.cards;
		
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		this.cards = array;
	};

	MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
		this.pairsClicked++;
		
		if(firstCard.attr('name') === secondCard.attr('name')){
			this.pairsGuessed++;
			return true;
		}
		return false;

	}
	MemoryGame.prototype.finished = function () {
		if(this.pairsGuessed >= 12){
			return true
		}
		return false;
	};
	
	MemoryGame.prototype.flipCard = function(){
		
	}
	
	//GameLogic
	var myGame = new MemoryGame(cards);
	myGame.shuffleCard();
	placeCards();
	

});