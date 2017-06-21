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

// Shuffles the cards (applies Fisher-Yates)
MemoryGame.prototype.shuffleCards = function() {
  cards = this.cards;
  var currentIndex = cards.length;
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
  return cards;
};

// Selects a card
MemoryGame.prototype.selectCard = function(card) {
  if (this.selectedCards.length === 0) {
    this.selectedCards.push(card);
    showCard(card);
  } else if (this.selectedCards.length === 1) {
    this.selectedCards.push(card);
    showCard(card);
    if(this.isMatch()) {
      this.correctPairs++;
      this.selectedCards = [];
    } else {
      setTimeout(function() {
        hideCard(this.selectedCards[0]);
        hideCard(card);
        this.selectedCards = [];
      }.bind(this), 1000);
    }
    this.pairsClicked++;
  }
  if (this.correctPairs === 12) {
    this.finished();
  }
};

// Compares two cards, returns true if they are equals
MemoryGame.prototype.isMatch = function () {
  var match = false;
  var sameHero = (this.selectedCards[0].attr('id') === this.selectedCards[1].attr('id'));
  if(sameHero) {
    match = true;
  }
  return match;
};

//
MemoryGame.prototype.finished = function () {
  $("#congratulations").show();
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame.shuffleCards();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
    // html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Listener for user click
  $('.back').on('click', function(){
    memoryGame.selectCard($(this).parent());
    updateScore(memoryGame);
  });
});

// Shows a card
function showCard(card) {
  card.find('.back').hide();
  card.find('.front').addClass('visible');
}

// Hides a card
function hideCard(card) {
  card.find('.back').show();
  card.find('.front').removeClass('visible');
}

// Updates displayed score
function updateScore(game) {
  $('#pairs_clicked').text(game.pairsClicked);
  $('#pairs_guessed').text(game.correctPairs);
}
