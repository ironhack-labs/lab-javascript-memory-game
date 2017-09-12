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
  		{ name: "thor",            img: "thor.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  return _.shuffle(this.cards);
};

MemoryGame.prototype.selectCard = function(card){

};
//******************************************************************
// HTML/CSS Interactions
//******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame.cards = memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $("#memory_board div.card").on("click", function(){
    var x = $(this).attr('name');
    memoryGame.selectedCards.push(x);

    console.log(memoryGame.selectedCards);

    if(memoryGame.selectedCards.length ==2){
	    if(memoryGame.selectedCards[0]==memoryGame.selectedCards[1]){
		console.log("Has ganado");
    memoryGame.selectedCards=[];
    memoryGame.pairsClicked += 1;
    console.log("Has jugado " + memoryGame.pairsClicked + " veces...");

	   }
	  else{
		console.log("Has perdido");
    memoryGame.selectedCards=[];
    memoryGame.pairsClicked += 1;
    console.log("Has jugado " + memoryGame.pairsClicked + " veces...");
	   }
}

  });

});
