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
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }  
};

MemoryGame.prototype.selectCard = function(parentEleCard) {
  var cardElement = $(parentEleCard).children()[0];
  var cardId = $(cardElement).attr('id');
  var card = this.cards.filter(function(card) {
    return card.img == cardId;
  });
  
  if (this.selectedCards.length === 1) {
    this.pairsClicked += 1;
    if (card[0].name === this.selectedCards[0].name) {
      this.correctPairs+=1;      
    } else {
      this.pairsClicked+=1;
      // tell user "Wrong Guess"
      //unflip second
      var self = this;
      setTimeout(function() {
          self.unFlipCard(parentEleCard);
       }, 500);

      //unflip first
      var alreadyFlippedElement = this.selectedCards[0];
      var alreadyFlippedCardId = alreadyFlippedElement.img;
      alreadyFlippedCardId = alreadyFlippedCardId.replace('.jpg','');
      var alreadyFlippedCard = $('#' + alreadyFlippedCardId + '\\.jpg.back.flipped').parent();
      setTimeout(function() {
          self.unFlipCard(alreadyFlippedCard);
       }, 500);

    }
    this.selectedCards = [];
  } else {
     this.selectedCards.push(card[0]);
  }
 
};


MemoryGame.prototype.flipCard = function (card) {
    var backCard = $(card).children()[0];
    var frontCard = $(card).children()[1];
    $(backCard).addClass('flipped');
    $(frontCard).addClass('showFront');
    this.selectCard(card);
};

MemoryGame.prototype.unFlipCard = function (card) {
    var backCard = $(card).children()[0];
    var frontCard = $(card).children()[1];
    $(frontCard).removeClass('showFront');
    $(backCard).removeClass('flipped');
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame = new MemoryGame();
  memoryGame._shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.back').on('click', function(){
    flip($(this).parent());
    refreshResults();
  });

  function flip(card) {
    memoryGame.flipCard(card);
  }

  function unFlip(card) {
    memoryGame.unFlipCard(card);
  }

  function refreshResults() {
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.correctPairs);
  }

});
