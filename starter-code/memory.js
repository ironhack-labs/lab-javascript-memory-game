// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [{
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
    {
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};

MemoryGame.prototype.randomHeroes = function() {
  for (var i = this.cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var aux = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = aux;
  }
  return this.card;
};

MemoryGame.prototype.compareCards = function(){
  if (this.selectedCards[0] == this.selectedCards[1]){
    console.log('Zon iguale, primo');
  } else {
    console.log('Ni de flai');
  }
};

MemoryGame.prototype.cleanSelectedCards = function() {
  this.selectedCards = [];
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  newGame = new MemoryGame();
  var html = '';
  newGame.randomHeroes();
  newGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="' + pic.img + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  document.getElementById('memory_board').innerHTML = html;

  $('.card').click(function(){
    var cardName = $(this).attr('id');
    newGame.selectedCards.push(cardName);
    if (newGame.selectedCards.length == 2){
      console.log(newGame.selectedCards[0] + " - " + newGame.selectedCards[1]); // Este mamon se queda
      newGame.compareCards();
      newGame.cleanSelectedCards();
    }
    console.log(newGame.selectedCards);
  });
});
