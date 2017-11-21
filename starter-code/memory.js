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

  // Recorro todo el array, para cada iteración, genero un
  // valor de j que esté entre 0 y el valor de la iteración
  // en ese momento, y hago un swap entre arr[j] y arr[i];
  var j= 0;
  var temp = null;

  for (var i = this.cards.length - 1; i >= 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
};

MemoryGame.prototype.selectCard = function(card){

  memoryGame.pairsClicked += 1;
  $('#pairs_clicked').html(memoryGame.pairsClicked);
  memoryGame.selectedCards.push(card);

  if (memoryGame.selectedCards.length === 1) {
    $(card).children().toggleClass('back');
  } else if (memoryGame.selectedCards.length === 2) {
    $(card).children().toggleClass('back');
    if (memoryGame.selectedCards[0].attr('name') === memoryGame.selectedCards[1].attr('name')) {
      memoryGame.selectedCards[0].children().addClass('blocked');
      memoryGame.selectedCards[1].children().addClass('blocked');
      memoryGame.correctPairs += 1;
      $('#pairs_guessed').html(memoryGame.correctPairs);
      memoryGame.selectedCards.length = 0;
    } else if (memoryGame.selectedCards[0].attr('name') !== memoryGame.selectedCards[1].attr('name')){
        setTimeout(function () {
        memoryGame.selectedCards[0].children().toggleClass('back');
        memoryGame.selectedCards[1].children().toggleClass('back');
        memoryGame.selectedCards.length = 0;
      }, 1000);
    }
  }

  if (memoryGame.correctPairs === 12) {
    alert('Ouuuu yeaaaaa!!!');
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
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('#memory_board').on('click', '.card', function () {
    memoryGame.selectCard($(this));
  });

});
