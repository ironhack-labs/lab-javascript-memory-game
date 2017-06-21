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
  this.cards = _.shuffle(this.cards);
};

MemoryGame.prototype.compareSelectedCards = function() {
  if (this.selectedCards[0] == this.selectedCards[1]) {
    console.log("this cards are the same");
    return true;
  }else {
    console.log("this cards are different");
    return false;
  }
};

MemoryGame.prototype.increasePairsClicked = function() {
  this.pairsClicked += 1;
  $("#pairs_clicked").replaceWith("<span id='pairs_clicked'>" + this.pairsClicked + "</span>");
  console.log("You have selected " + this.pairsClicked + "pairs of cards");
};

MemoryGame.prototype.increaseCorrectCardPairs = function () {
  this.correctPairs += 1;
  $("#pairs_guessed").replaceWith("<span id='pairs_guessed'>" + this.correctPairs + "</span>");
  console.log("These cards are the same. You already have found: " + this.correctPairs + "pairs of cards");
};


MemoryGame.prototype.clearSelectedCards = function() {
  this.selectedCards = [];
  console.log("I just cleared the selected cards, choose again two new cards");
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // guarder en una variale los valores que tenga en onclic event en el array del objeto y despues compararlos entre si para emepzar con la dinamica del juego
  $(".card").click(function() {
      var cardName = $(this).attr("id");
      memoryGame.selectedCards.push(cardName);
      $(this).find(".front").toggleClass("back");
      if (memoryGame.selectedCards.length == 2) {
        memoryGame.increasePairsClicked();
        var resultComparation = memoryGame.compareSelectedCards ();
        if (resultComparation) {
          memoryGame.increaseCorrectCardPairs();
          memoryGame.clearSelectedCards();
        }else {
          console.log("You didn't match this pair. You still have " + memoryGame.correctPairs + " pairs found");
          memoryGame.clearSelectedCards();
        }
      }
    });



});
