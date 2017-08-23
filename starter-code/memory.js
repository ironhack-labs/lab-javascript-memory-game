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

MemoryGame.prototype._shuffleCards = function() {
  var m = this.cards.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
  return this.cards;
};


MemoryGame.prototype.selectCard = function(card) {
  if (this.selectedCards.length === 0) {
    this.selectedCards.push(card);
  } else {
    this.pairsClicked++;
    this.selectedCards.push(card);
    var firstCard = this.selectedCards[0];
    var secondCard = this.selectedCards[1];
    if (firstCard.attr("name") === secondCard.attr("name")) {
        this.correctPairs++;
    } else {
      $(".back").css("pointer-events", "none");
      var flipBack = function() {
        setTimeout(function() {
          firstCard.show();
          firstCard.siblings().removeClass("back");
          secondCard.show();
          secondCard.siblings().removeClass("back");
          $(".back").css("pointer-events", "auto");
        }, 1000);
      };
      flipBack();
      }
      this.selectedCards = [];
      if (this.correctPairs === 12) {
        alert("Congratulations!");
      }
    }
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){

  memoryGame = new MemoryGame();
  var html = '';

  var shuffle = (function() {
    memoryGame._shuffleCards();
  })();

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


  $('.back').on('click', function(){
      $(this).hide(); // hide back
      $(this).siblings().addClass("back"); // show front
      memoryGame.selectCard($(this)); // perform logic
      $("#pairs_clicked").html(memoryGame.pairsClicked); // update pairs clicked
      $("#pairs_guessed").html(memoryGame.correctPairs); // update pairs guessed
  });


});

