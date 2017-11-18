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

MemoryGame.prototype.shuffle = function() {
  var array = this.cards;
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  this.cards = array;

  return this.cards;
};

MemoryGame.prototype.selectCard = function(card) {
  card.removeClass("back").addClass("front");
  card.siblings().removeClass("front").addClass("back blocked");

  if (this.selectedCards.length === 1) {
    var previousCard = this.selectedCards[0];
    this.pairsClicked++;
    $("#pairs_clicked").text(this.pairsClicked);

    if (previousCard.attr("name") === card.attr("name")) {
      this.selectedCards.splice(0, this.selectedCards.length);
      this.correctPairs++;
      $("#pairs_guessed").text(this.correctPairs);
    } else {
      console.log("Wrong answer");
      setTimeout(function(){
        card.removeClass("front blocked").addClass("back");
        card.siblings().removeClass("back").addClass("front");
        previousCard.removeClass("front").addClass("back");
        previousCard.siblings().removeClass("back").addClass("front");
      }, 750);
      this.selectedCards.splice(0, this.selectedCards.length);
    }

  } else {
    this.selectedCards.push(card);
  }
};

MemoryGame.prototype.finished = function() {
  if (this.correctPairs === this.cards.length / 2) {
    alert("Congratulations, you have win this game!");
  }
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame.shuffle();
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

  // Click a card

  $('.back').on('click', function(){
    memoryGame.selectCard($(this));
    memoryGame.finished();
  });
});
