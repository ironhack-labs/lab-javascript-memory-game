// //******************************************************************
// // Game Logic
// //******************************************************************
var timeSeconds = 3;

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

MemoryGame.prototype._shuffleCards = function() {
  this.cards.sort(function (){
    return Math.random() - 0.5;
  });
  return this.cards;
};

MemoryGame.prototype.flipCard = function(card) {
  // Add class found if the card is up.
  $(card).toggleClass("found");
  // Toggle front and back classes to show the cards.
  $(card.children()[0]).toggleClass("front").toggleClass("back");
  $(card.children()[1]).toggleClass("back").toggleClass("front");
}

// Activate click event on cssSelector
MemoryGame.prototype.activeClick = function(cssSelector) {
  var that = this;
  $(cssSelector).click(function(){
    that.selectCard($(this));
  });
}

// Disable click event on cssSelector
MemoryGame.prototype.blockClick = function(cssSelector) {
  var that = this;
  $(cssSelector).off("click");
}

MemoryGame.prototype.finished = function() {
  alert("YOU WIN!");
};

MemoryGame.prototype.selectCard = function(card) {
  this.pairsClicked += 1;
  $("#pairs_clicked").text(this.pairsClicked);
  if(this.pairsClicked === 2) {
    this.selectedCards.push(card);
    this.flipCard(card);
    // In the second card disable all click events on cards.
    this.blockClick(".card");
    if(this.selectedCards[0].attr("name") === this.selectedCards[1].attr("name")) {
      this.correctPairs += 1;
      $("#pairs_guessed").text(this.correctPairs);
      // The game finish when correctPairs = cards.length/2.
      if(this.correctPairs == this.cards.length/2) {
        this.finished();
      }
      else {
        this.selectedCards = [];
        this.pairsClicked = 0;
        $("#pairs_clicked").text(this.pairsClicked);
        // Active click event only in cards without found class.
        this.activeClick(".card:not(.found)");
      }
    }
    else {
      var that = this;
      setTimeout(function(){
        // Afert 1 second flip two cards because doesn't match.
        that.flipCard(that.selectedCards[0]);
        that.flipCard(that.selectedCards[1]);
        that.selectedCards = [];
        that.pairsClicked = 0;
        $("#pairs_clicked").text(that.pairsClicked);
        // Active click event only in cards without found class.
        that.activeClick(".card:not(.found)");
      }, 1000);  
    }
  }
  else {
    // Actions on the first card.
    this.selectedCards.push(card);
    this.flipCard(card);
    // Disable the new card and others found.
    this.blockClick(".found");
  }
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  // Suffle cards
  memoryGame._shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ')' + ' no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Disable all click
  $(document).off("click");

  // Click on cards
  // Activate click event on all cards
  memoryGame.activeClick(".card");
});
