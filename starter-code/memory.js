// //******************************************************************
// // Game Logic
// //******************************************************************

var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman1",         img: "aquaman.jpg" },
  		{ name: "batman1",          img: "batman.jpg" },
  		{ name: "captainamerica1", img: "captain-america.jpg" },
  		{ name: "fantasticfour1",  img: "fantastic-four.jpg" },
  		{ name: "flash1",           img: "flash.jpg" },
      { name: "greenarrow1",     img: "green-arrow.jpg" },
  		{ name: "greenlantern1",   img: "green-lantern.jpg" },
  		{ name: "ironman1",         img: "ironman.jpg" },
  		{ name: "spiderman1",       img: "spiderman.jpg" },
  		{ name: "superman1",        img: "superman.jpg" },
  		{ name: "theavengers1",    img: "the-avengers.jpg" },
  		{ name: "thor1",            img: "thor.jpg" },
      { name: "aquaman2",         img: "aquaman.jpg" },
  		{ name: "batman2",          img: "batman.jpg" },
  		{ name: "captainamerica2", img: "captain-america.jpg" },
      { name: "fantasticfour2",  img: "fantastic-four.jpg" },
  		{ name: "flash2",           img: "flash.jpg" },
  		{ name: "greenarrow2",     img: "green-arrow.jpg" },
  		{ name: "greenlantern2",   img: "green-lantern.jpg" },
  		{ name: "ironman2",         img: "ironman.jpg" },
  		{ name: "spiderman2",       img: "spiderman.jpg" },
  		{ name: "superman2",        img: "superman.jpg" },
  		{ name: "theavengers2",    img: "the-avengers.jpg" },
  		{ name: "thor2",            img: "thor.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};

MemoryGame.prototype._shuffleCards = function() {
  var currentIndex = this.cards.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;
  }
  return this.cards;
}

var cardFlipper = function(card){
  var cardFront = $(".front-card[name*=" + card + "]");
  var cardBack = $(".back-card[name*=" + card + "]");
  cardBack.toggleClass("back");
  cardFront.toggleClass("back");
};


MemoryGame.prototype._selectCard = function(card){
  cardFlipper(card);
  if (this.selectedCards.length > 0) {
    if (card.slice(0, card.length - 1) == this.selectedCards[0].slice(0, this.selectedCards[0].length - 1)) {
      this.correctPairs ++;
      this.pairsClicked ++;
      $("#pairs_guessed").html(this.correctPairs);
      $("#pairs_clicked").html(this.pairsClicked);
      gameOverChecker(this);
    } else {
      this.pairsClicked ++;
      $("#pairs_clicked").html(this.pairsClicked);
      cardFlipper(card);
      cardFlipper(this.selectedCards[0]);
    }
    this.selectedCards = [];
  } else {
      this.selectedCards.push(card);
  }
};

MemoryGame.prototype.finished = function() {
  location.reload();
  alert("Game Over");
};

function gameOverChecker(game) {
  if (game.correctPairs === 12) {
    game.finished();
  }
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame._shuffleCards();
  var html = '';


  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');


   html += '<div class="card" name="card_' + sanitizedName + '">';
    html += '<div class="back back-card"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front front-card" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $(".back").on('click', function(){
      var card = ($(this).attr("name"));
      memoryGame._selectCard(card);
  });
});





