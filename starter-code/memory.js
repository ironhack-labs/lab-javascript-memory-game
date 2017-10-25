// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: 'aquaman.jpg' },
  		{ name: "batman",          img: 'batman.jpg' },
  		{ name: "captain america", img: 'captain-america.jpg' },
  		{ name: "fantastic four",  img: 'fantastic-four.jpg' },
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

MemoryGame.prototype._shuffleCards = function(array) {
    var n = array.length, t, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }

    return array;
};

MemoryGame.prototype.flipCard = function (card) {
    $(card).toggleClass('backsHidden');
    $(card).next().toggleClass('show');
};

MemoryGame.prototype.selectCard = function(card) {
    var self = this;
    var card_name = $(card).attr('name');

    // First we push the card's name and flip the card
    self.selectedCards.push(card_name);
    self.flipCard(card);

    // If two cards were clicked
    if (self.selectedCards.length === 2) {
        $('.back').unbind('click'); // Desactive the click event
        // If they're the same
        if (self.selectedCards[0] === self.selectedCards[1]) {
            self.correctPairs++;
            $('#pairs_guessed').text(self.correctPairs);
            $('.back[name="' + card_name + '"]').addClass('okay'); // Adding this class to not flip them later
            if (self.correctPairs === (self.cards.length / 2)) {
                self.finished();
            }
        } else { // If they're not the same, flip them after un second
            setTimeout(function() {
                self.flipCard($('.backsHidden:not(.okay)'));
            }, 1000);
        }
        self.pairsClicked++;
        $('#pairs_clicked').text(self.pairsClicked);
        self.selectedCards = [];
        setTimeout(function() { // Activate the click event after un second
            $('.back').on('click', function(e) {
                e.stopPropagation();
                memoryGame.selectCard($(this));
            });
        }, 950);
    }

};

MemoryGame.prototype.finished = function() {
    alert("Congratulations, you won!");
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';
  var shuffledCards = memoryGame._shuffleCards(memoryGame.cards);

  shuffledCards.forEach(function(pic, index) {
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

   // Add all the divs to the HTML
   document.getElementById('memory_board').innerHTML = html;
  });

  $('.back').on('click', function(e) {
      e.stopPropagation();
      memoryGame.selectCard($(this));
  });

});
