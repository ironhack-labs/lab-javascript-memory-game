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

MemoryGame.prototype._shuffleCards = function () {
  this.cards = (this.cards).sort(function(){
    return Math.random() - 0.5;
  });
};

MemoryGame.prototype.pickedCards = function (card) {
  this.selectedCards.push(card);
};

MemoryGame.prototype.compareCards = function () {
  this.pairsClicked++;
  if (this.selectedCards[0] === this.selectedCards[1]) {
    this.correctPairs++;
    this.selectedCards = [];
    return true;
  }
  else {
    this.selectedCards = [];
    return false;
  }
};

MemoryGame.prototype.winCheck = function () {
  if (this.correctPairs === 12) {
    return true;
  }
};

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
  document.getElementById('memory_board').innerHTML = html;


  // //******************************************************************
  // // Gameplay
  // //******************************************************************

// START GAME : click on card event
  $(".back").click(function(){

    // variables and functions
    var nameCard = $(this).attr("name");
    var cardsToBeTurned = $(".wrongClicked");
    var block = function () {$(".back, .front").addClass("blocked");};
    var unblock = function () {$(".back, .front").removeClass("blocked");};
    var victoryMessage = function () {$(".card").remove(); $("#memory_board").text("VICTORY!");};


    // show image of card aka flip
    $(this).hide();
    $(this).next().addClass("back");

    // adds a class to the clicked card to remove later
    $(this).addClass("marked");

    // save card name in array
    memoryGame.pickedCards(nameCard);

    // check how many cards in array
    if (memoryGame.selectedCards.length == 2) {
      // block click possibility, will unblock after 1 sec
      block();
      setTimeout(unblock, 1000);

      // if cards are equal
      if(memoryGame.compareCards()) {
        $(".marked").removeClass("marked");
          // if all pairs are found
          if (memoryGame.winCheck()) {
            victoryMessage();
          }
      }
      // if cards are no match, flip the cards again after 1 sec
      else {
      var hideCards = function() {
          $(".marked").show();
          $(".marked").next().removeClass("back");
          };

      setTimeout(hideCards, 1000);
      }

      // updates scoreboard
      $("#pairs_guessed").text(memoryGame.correctPairs);
      $("#pairs_clicked").text(memoryGame.pairsClicked);
    }

  });

});
