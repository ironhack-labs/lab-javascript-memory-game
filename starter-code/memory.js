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

MemoryGame.prototype.shuffleCards = function(card) {

  var numCards = this.cards.length;
  var shuffledDeck = [];
  var randIndex = 0;

  for (i = 0; i < numCards ; i++) {
    randIndex = _.random(0, this.cards.length - 1);
    shuffledDeck.push(this.cards[randIndex]);
    this.cards.splice(randIndex,1);
  }

  this.cards = shuffledDeck;

}


MemoryGame.prototype.selectCard = function(card) {
  this.selectedCards.push(card); // add card to selected card vector
  card.children().toggle(); // show/hide card

  if (this.selectedCards.length === 2) {

      this.pairsClicked += 1;

      if (this.compareCards()) {
        // code if pair is matching : keep cards face up, clear selected cards, increment clicked pairs, increment correctPairs
        this.correctPairs += 1;
        this.selectedCards = [];
        this.updateScoreboard();

        var self = this;
        if (this.correctPairs == 12) {
          setTimeout(function() {
            self.declareVictory()
          }, 200);
        }

      } else {
        //code if pair is not matching, flip both cards face down, increment selected pairs, clear selected cards

        this.updateScoreboard();

        var self = this;
        setTimeout(function() {
          card.children().toggle(); // show/hide last card with a two second delay
          self.selectedCards[0].children().toggle();
          self.selectedCards = [];
        }, 2000);
      }

  } else  {
      // actions: if clicking on same card: nothing happens
  }

}

MemoryGame.prototype.compareCards = function() {
  return this.selectedCards[0].attr('id') == this.selectedCards[1].attr('id') ? true:false;
}

MemoryGame.prototype.declareVictory = function() {
  alert('Congrats! You\'ve won');
}

MemoryGame.prototype.updateScoreboard = function() {
  $('#pairs_clicked').html(this.pairsClicked);
  $('#pairs_guessed').html(this.correctPairs);
}



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  //first shuffle the cards
  memoryGame.shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  $('.card .front').hide();

  $('.card').click( function (e) { //only accept click if card is face down and if < 2 cards are already facing up

    if ($(this).find('.back').is(':visible') && memoryGame.selectedCards.length < 2 ) {
      memoryGame.selectCard($(this));
    }
  });


});
