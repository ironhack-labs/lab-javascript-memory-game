var MemoryGame = function() {
  this.Cards = [
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
  		{ name: "thor",            img: "thor.jpg" },
  	];
  this.picked_cards  = [];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;
  this._shuffleCard();
};
// this function just takes the array of cards above and shuffles them into a random order
MemoryGame.prototype._shuffleCard = function() {
  var counter = this.Cards.length;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = this.Cards[counter];
    this.Cards[counter] = this.Cards[index];
    this.Cards[index] = temp;
  }
  return;
};

MemoryGame.prototype.selectCard = function(card) {
  this.picked_cards.push(card);
  if(this.picked_cards.length===2) {
    if(this.picked_cards[0]===this.picked_cards[1]) {
      this.pairs_guessed++;
			saveCards(this.picked_cards);
			this.picked_cards=[];
		} else	{
			this.pairs_clicked++
			hideCards(this.picked_cards);
			this.picked_cards=[];
		}
		updateScore(this.pairs_guessed, this.pairs_clicked);
	}
};

function saveCards(cards) {
	$(".pic").find('img[src$="img/'+cards[0].img+'"]').each(function(){
		$(this).parent().unbind("click");
	});
}

function hideCards(cards) {
	var cardsImg = [cards[0], cards[1]];
	setTimeout(function(){
		cardsImg.forEach(function(el){
			$(".pic").find('img[src$="img/'+el+'"]').hide();
		})
	}, 1000)
}

function updateScore(cardsGuessed, cardsClicked="-") {
	$("#pairs-guessed").text(cardsGuessed);
	$("#pairs-clicked").text(cardsClicked);
}

MemoryGame.prototype.finished = function() {

};

var memoryGame;

// jQuery code:
$(document).ready(function(){
  memoryGame = new MemoryGame();

// adding the images to the grid
memoryGame.Cards.forEach(function(card, index) {
	$('#'+(index+1)).html(`<img src='./img/${card.img}'>`);
});

$('.pic').click(function(){
		$(this).children().toggle();
    //received the image file name which we can use to compare the images
    var card = $(this).children().attr('src').slice(6);
    memoryGame.selectCard(card);
	});
});
