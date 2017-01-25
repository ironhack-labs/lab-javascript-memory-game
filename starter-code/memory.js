//******************************************************************
// Game Logic
//******************************************************************

//******************************************************************
// HTML/CSS Interactions
//******************************************************************
window.onload = createNewBoard();



var cards = [
  'img/aquaman.jpg',
  'img/batman.jpg',
  'img/camptain-america.jpg',
  'img/fantastic-four.jpg',
  'img/flash.jpg',
  'img/green-arrow.jpg',
  'img/green-lantern.jpg',
  'img/ironman.jpg',
  'img/spiderman.jpg',
  'img/superman.jpg',
  'img/the-avengers.jpg',
  'img/thor.jpg'

];

var newCards = [];          //An empty array for storing values
var cardTiles = [];         //An empty array for card tiles for html
var tilesFlipped = 0;              //Keeping track of flipped tiles


$(document).ready(function(){
// THIS PROTOTYPE SHUFFLES THE CARDS
function shuffleCard() {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * array.length);
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

console.log(cards.shuffleCard());


// CREATING THE BOARD
function createNewBoard() {
	tilesFlipped = 0;
	var result = '';
    cards.shuffleCard();
	for(var i = 0; i < cards.length; i++){
		result += '<div id="tile_'+i+'" onclick="selectCard(this,\''+cards[i]+'\')"></div>';
	}
	result = $("#memory_board");
}








function selectCard (tile, value)  {   //FLIP THE TILES/SELECT THE CARD
    if ($("#tile") === "" && newCards.length < 2){
		tile.style.background = '#FFF';
		value = $("#tile");
      		if(newCards.length === 0){
      			newCards.push(value);
      			cardTiles.push("#tile");
      		} else if(newCards.length == 1){
      			newCards.push($("#tile"));
      			newCards.push("#tile");

      			if(newCards[0] == newCards[1]){
      				tilesFlipped += 2;
      				// Clear both arrays
      				newCards = [];
              cardTiles = [];

      				// CHECK IF BOARD IS CLEAR
      				if(tilesFlipped == newCards.length){
                var freshBoard = "";
      					 freshBoard = $("memory_board");
      					createNewBoard();
      				}
			} else {
				function flip(){                 //FLIP THE TILES OVER

				    var tile_1 = document.getElementById(cardTiles[0]);
				    var tile_2 = document.getElementById(cardTiles[1]);
				    tile_1.style.background = 'url(img/aquaman.jpg) no-repeat';
              var newTile = "";
            	newTile = $("#tile");
				    tile_2.style.background = 'url(img/aquaman.jpg) no-repeat';

            	newTile = $("#tile_2");
				    newCards = [];
            	    cardTiles = [];
				}
				setTimeout(flip2Back, 1000);
			}
}
}

// MemoryGame.prototype.finished = function() {
//
// };









}
