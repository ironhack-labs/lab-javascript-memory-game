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

// Shuffle the cards
MemoryGame.prototype._shuffleCards = function() {
  this.cards.sort(function() {
    return Math.random() - 0.5;
  });
};

// Selecting a Card
MemoryGame.prototype.selectCard = function(card) {
  if ($(card).hasClass("wait")) {
    return;
  }

  // Switch classes
  $(card).find(".back").removeClass("back").addClass("blocked");
  $(card).find(".front").addClass("back");

  // Change reference
  var that = this;

   if (this.selectedCards.length === 0) {
    this.selectedCards.push(card);
  } else {
    // Modify the text
    $("#pairs_clicked").text(++this.pairsClicked);
    // Compare card and save
    if (this.selectedCards[0].getAttribute("name") === card.getAttribute("name")) {
      $("#pairs_guessed").text(++this.correctPairs);
      that.selectedCards = [];
      // End if the cards are correct
      if (this.correctPairs == (this.cards.length / 2)) {
        this.finished();
      }

    } else {
      // Wait time to try again
      $(".card").addClass("wait");
       setTimeout(function() {
         [card, that.selectedCards[0]].forEach(function(elem) {
          $(elem).find(".blocked").removeClass("blocked").addClass("back");
          $(elem).find(".front").removeClass("back");
        });
        that.selectedCards = [];
        $(".wait").removeClass("wait");
      }, 1000);
    }
  }
};

// when the game finish
MemoryGame.prototype.finished = function() {
  if(confirm("COOL!! Do you want play again?")) {
    location.reload();
  }
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame._shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

   html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  $('#memory_board').html(html);

  $('.back').click(function() {
    memoryGame.selectCard(
      $(this).closest(".card")[0]
    );
  });
});
