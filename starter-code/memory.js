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

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

// Shuffle cards

MemoryGame.prototype.shuffleCards = function() {
  return _.shuffle(this.cards);
};

// Select a random card
//
MemoryGame.prototype.selectCard = function(card) {
  var selectedCard = memoryGame.shuffleCards();
  var newCard = selectedCard[card].name;
  this.selectedCards.push(newCard);
  this.pairsClicked += 1;
  console.log(newCard);
  return newCard;

};

MemoryGame.prototype.compareChoices = function() {
  var card1 = this.selectedCards[0];
  var card2 = this.selectedCards[1];
  if (card1 === card2) {
    this.correctPairs += 1;
    this.selectedCards = [];
    console.log("Has acertado una pareja!");
  } else {
    console.log("que malo eres joder!");
    this.selectedCards = [];
  }
};

MemoryGame.prototype.finished = function() {
  if (this.correctPairs === 12){
    console.log("Win!");
  }
};

var memoryGame;
$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame.cards= memoryGame.shuffleCards();
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  $(".card").on("click",function(){
    $(this).switchClass(("back"),("front"), 1000);
    });
});


// memoryGame.selectCard(9);
// memoryGame.selectCard(8);
// memoryGame.compareChoices();
