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
  // Modern Fisher-Yates shuffling algorithm
  var length = this.cards.length
  for (var i = 0; i < length - 2; i++) {
    var j = Math.floor(Math.random() * (length - i)) + i
    this.cards = shuffle(i, j, this.cards)
  }
  console.log(this.cards)
}

function shuffle (IndexCardA, IndexCardB, array) {
  // Copies the original array and returns a new one with the two items exchanging place
  var new_array = array.slice()
  var cardB = array[IndexCardB]

  new_array[IndexCardB] = array[IndexCardA]
  new_array[IndexCardA] = cardB
  return new_array
}

MemoryGame.prototype.selectCard = function (card) {
  if (this.selectedCards.length === 0) {
    this.selectedCards.push(card)
  }
  else {
    this.pairsClicked += 1
    var cardA = this.selectedCards[0]
    if (cardA.name === cardB.name) {
      this.selectedCards = []
      this.correctPairs += 1
      //Flip the cards
    } else {
      //Flip both cards to the backside
    }
  }
}

MemoryGame.prototype.finished = function () {
  if (this.correctPairs === this.cards.length / 2) {
    //Win!
  }
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
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

  $('.back').on('click', function () {
    console.log($(this))
  });
});
