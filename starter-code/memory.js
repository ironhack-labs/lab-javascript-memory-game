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

// click on card event
  $(".back").click(function(){
    // variables card value
    var nameCard = $(this).attr("name");

    // show image of card aka flip
    $(this).hide();
    $(this).next().addClass("back");
    $(this).addClass("clicked");

    // save card value in array
    memoryGame.pickedCards(nameCard);

    // check how many cards in array
    if (memoryGame.selectedCards.length == 2) {
      // block click possibility

      // check if cards are equal
      memoryGame.compareCards();

      // updates scoreboard
      $("#pairs_guessed").text(memoryGame.correctPairs);
      $("#pairs_clicked").text(memoryGame.pairsClicked);

    }
  });



// $(".clicked").show().next().removeClass("back");










// Flip cards function
  /*function flipCard () {
    $("back").click(function(){
      $(this).hide();
      $(this).next().addClass("back");
    });
  }



/*
  // Push selected selected
  memoryGame.pushCards = function () {
    $(".card").click(function(){
      var selectedCard = $(this);
      memoryGame.selectedCards.push(selectedCard);
      clickAmount ++;
    });
  };


  // Compare cards
memoryGame.compareCards = function () {
  var card1 = memoryGame.selectedCards[0];
  var card2 = memoryGame.selectedCards[1];

  if(memoryGame.selectedCards.length === 2) {
    $(".front, .back").toggleClass("blocked");
    alert("winner");
  }
};
*/



// End playerTurn

});
